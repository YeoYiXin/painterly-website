from PIL import Image, ImageFilter
from pathlib import Path
# import noise_removal as nr
import cv2
import numpy as np
import random, math
import bisect

'''
    For the most part, this entire file deals with gradient related stuff or brush stroke and direction. As far as I know,
    majority of this can be changed and depends on the output the coder wants. For eacmple, direction may not necessarily need to use math.atan2.
    This will be explored more later on as it is not too hard to change or understand.
'''

class gradient:
    def __init__(self, fieldx, fieldy):
        self.fieldx = fieldx
        self.fieldy = fieldy

    @staticmethod
    def from_gradient(gray):
        fieldx = cv2.Sobel(gray, cv2.CV_32F, 1, 0) / 15
        fieldy = cv2.Sobel(gray, cv2.CV_32F, 0, 1) / 15
        return gradient(fieldx, fieldy)
        
    def direction(self, i, j):
        return math.atan2(self.fieldy[i, j], self.fieldx[i, j]) 

    def magnitude(self, i, j):
        return math.hypot(self.fieldx[i, j], self.fieldy[i, j])
        
    def smooth(self, radius, iterations=1):
        s = 2*radius + 1
        for _ in range(iterations):
            self.fieldx = cv2.GaussianBlur(self.fieldx, (s, s), 0)
            self.fieldy = cv2.GaussianBlur(self.fieldy, (s, s), 0)