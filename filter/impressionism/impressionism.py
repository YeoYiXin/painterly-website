import cv2
import numpy as np
import random, math
import argparse
from .color_palette import color_palette

def filter(gradient, img, gray):   
        
    parser = argparse.ArgumentParser(description='...')
    parser.add_argument('--palette-size', default=20, type=int, help="Number of colors of the base palette")
    parser.add_argument('--stroke-scale', default=0, type=int, help="Scale of the brush strokes (0 = automatic)")
    parser.add_argument('--gradient-smoothing-radius', default=0, type=int, help="Radius of the smooth filter applied to the gradient (0 = automatic)")
    args = parser.parse_args()
    
    height = img.shape[0]
    width = img.shape[1]
    

    if args.stroke_scale == 0:
        stroke_scale = int(math.ceil( max(height, width) / 1300))
        print("Automatically chosen stroke scale: %d" % stroke_scale)
    else:
        stroke_scale = args.stroke_scale

    if args.gradient_smoothing_radius == 0:
        gradient_smoothing_radius = int(round(max(img.shape) / 20))
        print("Automatically chosen gradient smoothing radius: %d" % gradient_smoothing_radius)
    else:
        gradient_smoothing_radius = args.gradient_smoothing_radius

    palette_size = args.palette_size #number of colors in the palette

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    palette = color_palette.from_image(img, palette_size) #get colors from image
    palette = palette.extend([(0, 50, 0), (15, 30, 0), (-15, 30, 0)])     #extend the hue/saturation ranges of the extracted colors from the image

    # cv2.imshow("palette", palette.to_image())
    # cv2.waitKey(200) 

    gradient = gradient.from_gradient(gray)
    gradient.smooth(gradient_smoothing_radius)
        
    res = cv2.bilateralFilter(img, 15, 75, 75 ) #initially used medianblur 
    res2 = cv2.bilateralFilter(img, 15, 75, 75 ) #initially used medianblur 

    grid = randomized_grid(img.shape[0], img.shape[1] ,scale= 4)
    batch_size = 400
    
    for h in range(0, len(grid), batch_size):

        #for each x inside the grid which ranges from h to min(), we access the img[x[0], x[1]] values. x[0], x[1] are coordinates of the image we access that returns the RGB of that pixel
        pixels = np.array([ (img[x[0], x[1]]) for x in grid[h: len(grid)]])

        # precompute the probabilities for every pixel based on the palette   
        color_probabilities = color_palette.compute_color_probabilities_base(pixels, palette, 9)
        
        #this is where the "painting" occurs, we select a color, compute the angle of each brush stroke and the length.
        #for the most part, aspects regarding brush strokes and lengths are up to the coder to change as they see fit. Its not integral to
        #follow these specific calculations step by step.
        
        #base layer
        for i, (y, x) in enumerate(grid[h:min(h + batch_size, len(grid))]):
            color = color_palette.color_select(color_probabilities[i], palette) #this can be modified, it basically iterates through all the color probabilities, inserts it where the palette is, returns that placement
            angle = math.degrees(gradient.direction(y, x)) + 90 
            length = int(round((stroke_scale * 2) + stroke_scale * math.sqrt(gradient.magnitude(y, x))))

            # We draw an ellipse on res(the canvas), by specifying the xy coordinates it will appear at, the angle, stroke lenght, color etc.
            cv2.ellipse(res,  (x, y), (length, stroke_scale), angle, 0, 360, color, -1, cv2.LINE_AA)
        
        color_probabilities = color_palette.compute_color_probabilities_top(pixels, palette, 9)

        #top layer
        for i, (y, x) in enumerate(grid[h:min(h + batch_size, len(grid))]):
            color = color_palette.color_select(color_probabilities[i], palette)
            angle = math.degrees(gradient.direction(y, x)) + 90 
            length = int(round((stroke_scale * 2) + stroke_scale * math.sqrt(gradient.magnitude(y, x))))

            cv2.ellipse(res2,  (x, y), (length, stroke_scale), angle, 0, 360, color, -1, cv2.LINE_AA)

    #layer the top and base together and change their opacities
    
    final = cv2.addWeighted(res, 0.25, res2, 0.75, 0)

    return final

    # cv2.imshow("final", color_palette.limit_size(final, 1080))

    # cv2.waitKey(0)

#This is the grid we use to figure out where pixels will go when we do ellipse at the end.
def randomized_grid(h, w, scale):
    assert (scale > 0) #scale must be more than 0 so we can determine the "distance"

    r = scale//2 #scale is used as a measurement of how many "units" one stroke will be. It helps with 

    grid = []
    for i in range(0, h, scale):
        for j in range(0, w, scale):
            y = random.randint(-r, r) + i
            x = random.randint(-r, r) + j

            grid.append((y % h, x % w))
                
    return grid

# img = cv2.imread("/Users/rin/Desktop/output examples/lake 2 original.jpg")

# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# filter(gradient, img, gray)