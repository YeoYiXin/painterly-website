import numpy as np
import cv2

def filter1(img, grey):
    #Blur image
    grey =cv2.GaussianBlur(grey, (3, 3), 0) 
   
    #Finding Edges    
    ret, _ = cv2.threshold(grey, 50, 255, cv2.THRESH_BINARY) #ret is the threshold
    edges = cv2.Canny(grey, ret/2, ret) #Canny Method
    invert = cv2.bitwise_not(edges) #to invert the black and white of the image, so color doesn't appear as the edges

    hsv_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    # Increase the saturation and brightness
    hsv_img[:, :, 1] = np.clip(hsv_img[:, :, 1] * 1.5, 0, 255)  # Increase saturation
    hsv_img[:, :, 2] = np.clip(hsv_img[:, :, 2] * 1.2, 0, 255)  # Increase brightness

    # Convert the image back to the BGR color space
    newIm = cv2.cvtColor(hsv_img, cv2.COLOR_HSV2BGR)   

    K = 20
    Z = np.float32(newIm).reshape((-1, 3))
    # convert to np.float32
    Z = np.float32(Z)

    #notes on criteria
    #1st parameter: criteria for epsilon and criteria for max iteration, if reached then terminate 
    #default value of esp is 2 and iter is 1
    #2nd parameter: maximum number of iterations or the maximum number of times a particular operation will be performed
    #3rd parameter: represents the epsilon or the required accuracy for the operation. It specifies the 
    #               minimum change in a parameter value to continue the iteration process.
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 15, 0.0001)  
    _,label,center= cv2.kmeans(Z,K,None,criteria,4,cv2.KMEANS_RANDOM_CENTERS) 
    # Now convert back into uint8, and make original image
    center = np.uint8(center)
    res = center[label.flatten()]
    res2 = res.reshape((newIm.shape))
        
    #Convert to a cartoon version
    cartoon = cv2.bitwise_and(res2, res2, mask= invert)
    return cartoon