from PIL import ImageFilter
import numpy as np

def check_noise(img,filter_image): #to return the noise level - using gaussian noise
    mse = np.mean((np.array(img) - np.array(filter_image)) ** 2)
    return mse

def radius_size(img):
    brush_sizes = [1,2,3,4,5,6,7,8,9] #just to test

    best_brush_size = None #set it to null value first
    least_noise_level = float('inf') #actual value (pixels/matrix) - filtered image (pixels/matrix) = noise value (matrix)

    for size in brush_sizes:
        filter_image = img.filter(ImageFilter.GaussianBlur(radius = size))

        noise_level = check_noise(img,filter_image)
        if noise_level < least_noise_level:
            least_noise_level = noise_level
            best_brush_size = size
    return best_brush_size 