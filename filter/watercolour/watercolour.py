from PIL import Image
from pathlib import Path
import cv2
import numpy as np

def overlay_border(border1, background1):
    background = Image.open(background1)
    border = Image.open(border1)

    # Resize the border image to match the dimensions of the background image
    border = border.resize(background.size)

    # Create a new image for the output
    output = Image.new("RGBA", background.size)

    # Paste the background image onto the output
    output.paste(background, (0, 0))
    border_thickness = 0 #the position of the border on the background image
    # Paste the border image onto the output with the desired border thickness
    output.paste(border, (border_thickness, border_thickness), border)
    image_with_border_path = Path("final_with_border.png")
    output.save(image_with_border_path, format="PNG", quality=95)  # Save the final image with the border
    return image_with_border_path

def filter3(img, grey): 
    #Convert image and blur
    img_filter =cv2.GaussianBlur(grey, (5, 5), 1.5)
    for i in range(10):
        img_filter = cv2.GaussianBlur(img_filter, (5,5), 1.5)


    #creating sketch
    img_filter = cv2.equalizeHist(img_filter)
    img_filter = cv2.bilateralFilter(img_filter, 9, 75, 75)
    invert = cv2.bitwise_not(img_filter)

    for i in range(3):
        bilateral = cv2.bilateralFilter(invert, 3, 50, 50)

    for i in range(3):
        bilateral = cv2.bilateralFilter(bilateral, 5, 55, 55)
    
    for i in range(3):
        bilateral = cv2.bilateralFilter(bilateral, 7, 60, 60)

    invert1 = cv2.bitwise_not(bilateral)
    divide = cv2.divide(img_filter, invert1, scale=265.0)
    sketch = cv2.merge([divide,divide,divide])

    #manipulating the brightness and saturation of pixels
    hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    # Increase the saturation and brightness
    hsv_img[:, :, 1] = np.clip(hsv_img[:, :, 1] * 1.5, 0, 255)  # Increase saturation
    hsv_img[:, :, 2] = np.clip(hsv_img[:, :, 2] * 1.2, 0, 255)  # Increase brightness

    # Convert the image back to the BGR color space
    newIm = cv2.cvtColor(hsv_img, cv2.COLOR_HSV2BGR)

    #remove noise from the image
    bilateral_im = cv2.bilateralFilter(newIm, 15, 50, 50)
    bilateral_im = cv2.bilateralFilter(bilateral_im, 3, 75, 75)
    bilateral_im = cv2.bilateralFilter(bilateral_im, 5, 60, 60)
    bilateral_im = cv2.bilateralFilter(bilateral_im, 3, 75, 75)

    #combine the sketch and image
    watercolourImg = ((sketch/255.0)*bilateral_im).astype("uint8")  
    cv2.imwrite("watercolor_no_border.JPG", watercolourImg)

    #get the border
    border_path = Path("filter/watercolour/Border.png")
    background_path = Path("watercolor_no_border.JPG")
    preready_image_path = overlay_border(border_path, background_path)

    img = cv2.imread(str(preready_image_path))
    for i in range(7):
        bilateral_im = cv2.medianBlur(img, 3)

    preserved = cv2.edgePreservingFilter(bilateral_im, sigma_s=5)

    #add paper texture
    paper = cv2.imread("filter/watercolour/apaper.jpg")
    paper = cv2.resize(paper, (preserved.shape[1], preserved.shape[0]))
    alpha = 0.2
    watercolourImg = cv2.addWeighted(preserved, 1.0-alpha, paper, alpha, 0)
    return watercolourImg