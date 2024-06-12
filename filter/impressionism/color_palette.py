from PIL import Image, ImageFilter
from pathlib import Path
import cv2
import numpy as np
import random, math
import bisect
from .gradient import gradient
from sklearn.cluster import KMeans
import scipy.spatial

class color_palette:
    
    def __init__(self, colors, base_len = 0):
        self.base_len = base_len if base_len > 0 else len(colors)
        self.colors =colors
        
    def clipped_addition(img_channel, channel):
        '''
        This function is to take in an image channel which looks something like
        [[ 90  19  53 215  60 170  89 114 237  37 104  95  58 205  73  59  15 225 25 220]], and a mask which looks like
        [[False  True False False False False False False False  True False False False False False False  True False  True False]]. 
        The mask values which contain True will have the _max or _min value applied depending on if the channel value is > or < than 0.
        
        img_channel > (_max - channel) is essentially comparing every value inside the vector to the value derived from _max - channel
        to determine if its either True or False. This is why mask ends up looking like [[False True False .. .. . .]]
         
        Main purpose of this function is to essentially re-apply the _max or _min values to the img_channel vector if it does not fall
        within the range we specified as > or < than (_max or _min) - channel. Essentially, this function works to "standardise" all the values
        in the img_channel vector so all of it falls within a certain range, that range being the max or min values and the values inside the img_channel
        which passes the specified threshold.
        '''
        #img_channel is passed as hue or saturation of the original image
        #channel is passed as the default value for saturation and hue(0), or the value specified by the user 

        #np.putmask Syntax : numpy.putmask(array, condition, value)
        #np.putmask Return : Return the array having new elements according to value.
        #if the image channel value is more than the threshold(max-channel), we apply a mask with the maximum value
        
        _max=255
        _min=0
        
        if channel > 0:
            mask = img_channel > (_max - channel)
            img_channel += channel
            np.putmask(img_channel, mask, _max)

        #if any values in the array match the condition of mask, then we assign those values as _min's value
        if channel < 0:
            mask = img_channel < (_min - channel)
            img_channel += channel
            np.putmask(img_channel, mask, _min)
        
    def color_select(probabilities, palette):
        '''
        r will be any real number between and including 0 and 1.
        bisect left will insert the random r value at the appropriate position 
        if the index of the bisect_left is less than the length of the palette, then return the palette color where this index is at.
        Otherwise, returns the last color on the palette.
        
        The reason color select is done this way is because we want to choose a random color that is within the range which probabilities has given us based 
        on the pixels passed into compute_color_probabilities when this function is called in filter3.py. Once we establish a range, we choose any random color
        depending on r and where it appears when we do bisect_left. This returns i, which we then use to directly select from the palette itself. 
        
        Basically, this function uses probability and tells us based on that probability, which color from the defined palette we have, that we should use appropriately.
        
        '''
        r = random.uniform(0, 1)
        i = bisect.bisect_left(probabilities, r)
        return palette[i] if i < len(palette) else palette[-1]

    
    def regulate(img, hue=0, saturation_default=0, luminosity_default=0):
        '''
            This function appears to be "adding" colors to the existing base palette we passed in, by increasing the HSV values,
            it doubles the hue values, then checks if saturation and value meets the appropriate threshold(clipped_addition function)
        '''
        
        #BGR2HSV_FULL is used since _FULL has a larger H range than the ones without it
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV_FULL)
        
        #if any hue is negative(grey image), we adjust it so its within a valid range between 0 - 255?
        if hue < 0: 
            hue = 255 + hue
            
        #We double the value of the hue 
        hsv[:, :, 0] += hue

        #We pass in the actual saturation and luminosity from the HSV channels, and compare it to the default saturation and hue(which
        # is set to zero), or otherwise if specified by the user when calling regulate.

        color_palette.clipped_addition(hsv[:, :, 1], saturation_default) #access Saturation channel
        color_palette.clipped_addition(hsv[:, :, 2], luminosity_default) #access Value channel
        
        #after adjusting the hue saturation and values, we return this "modified version" of the HSV, which is now in BGR format
        return cv2.cvtColor(hsv, cv2.COLOR_HSV2BGR_FULL)
    
    def extend(self, extensions):
        '''
  
        reshape((1, len(self.colors), 3))'s parameters indicate:
        1 : the size of the first dimension
        len(self.colors): the number of elements inside the first dimension(for example, how many rows?)
        3: indicates how many items/values are inside the elements of the first dimension
        
        For example: [[ [191.51085044 194.63695015 197.01348974] [ 15.60520186  44.74378882  41.73369565] ]] means reshape(1, 2, 3)
        
        regulate(self.colors.reshape(1, len(self.colors), 3).astype(np.uint8), *x) takes in the image returned from doing reshape as well as 
        *x which passes in the hue, saturation_default and lumonisity_default values from each tuple in the list from extensions when we loop through
        it using x.
        
        We do reshape on the entire color_palette.regulate() so we can make sure that extension and self.colors.reshape(-1,3) can be
        stacked together vertically later on when we need to return the result of this function.
        
        The purpose of doing reshape and then regulate is to go through all the extensions from the parameter taken in, reshape the origina
        colors we have akin to something like one row of "base colors", that we then pass these base colors along with the extension tuple into regulate(),
        which then returns to us the entire palette of colors which includes the base colors, and all the extended colors we added .
        
        '''
        
        extension = [color_palette.regulate(self.colors.reshape(1, len(self.colors), 3).astype(np.uint8), *x).reshape((-1, 3)) for x
                     in
                     extensions]
        
        #np.vstack is used to stack arrays vertically to make a single array
        return color_palette(np.vstack([self.colors.reshape((-1, 3))] + extension), self.base_len)
    
    def limit_size(img, max_x, max_y = 0):
        '''
        This function basically controls the size of how big our palette image looks when its displayed. Not important other than for visualisation
        purposes.
        '''
        #if max_x or max_y is not provided, default to 0
        
        if max_x == 0 :
            return img
        if max_y == 0:
            max_y = max_x
        
        # calculates a ratio to resize the image   
        ratio = min(1.0, float(max_x) / img.shape[1], float(max_y) / img.shape[0])

        #return the original image if the ratio is 1, otherwise, resize the image
        if ratio != 1.0:
            shape = (int(img.shape[1] * ratio), int(img.shape[0] * ratio))
            return cv2.resize(img, shape, interpolation=cv2.INTER_AREA)
        else:
            return img 
    
    def from_image(img,n, max_img_size = 200, n_init = 10):
        '''
        The middle of a cluster. A centroid is a vector that contains one number for each variable, 
        where each number is the mean of a variable for the observations in that cluster. 
        The centroid can be thought of as the multi-dimensional average of the cluster. It is not a multi-dimensional average, but merely an average/mean of the given cluster - which will change
        as the K-Means process continues until its stabilises (meaning: that is the best version that we can get and no more movement can be made, therefore, no longer affecting the centroid values).
       
        Use the cluster centroid as a general measure of cluster location and to help interpret each cluster. 
        Each centroid can be seen as representing the "average observation" within a cluster across 
        all the variables in the analysis.
        
        When doing color_palette, we pass into init the most important colors from the cluster(ie, the centroids) since this gives us
        the highest degree of similarity. In KMeans and cluster.fit, we extract the colors we want. In the return statement, we redefine the palette we want
        to use in init.
        '''
        
        #this is optional, for display purposes, we may limit the size of the image
        img =  color_palette.limit_size(img, max_img_size)
        
        #makes an instance of KMeans model but does not compute anything yet
        cluster = KMeans(n_clusters=n, n_init=n_init)
        
        #reshape( insert how many rows, insert how many elements in each row): 
        #use -1 when we dont know how many rows we want, but we know we need three columns each row for the RGB values, so numpy will calculate for us the value to replace -1 with/ie how many rows
        reshaped = img.reshape(-1,3)        
        
        #reshaped is a 2D array, each row consists of 3 columns
        #fit() performs KMeans clustering on the reshaped image, using n clusters and 10 from init input. Uses the previously
        #initialised KMeans
        cluster.fit(reshaped)

        #returns the cluster colors we computed with , which are cluster centroids, 
        #each cluster is defined as the activity with the HIGHEST DEGREE OF SIMILARITY WITH ALL OTHER ACTIVITIES IN THE SAME CLUSTER. 
        return color_palette(cluster.cluster_centers_)
    
    def to_image(self):
        '''
            This function seems to basically just work as a "copy paste", we just use this to show the color palette. Nothing too important.
        '''
        
        cols = self.base_len
        rows = int(math.ceil(len(self.colors) / cols))

        res = np.zeros((rows * 80, cols * 80, 3), dtype=np.uint8)
        for y in range(rows):
            for x in range(cols):
                if y * cols + x < len(self.colors):
                    color = [int(c) for c in self.colors[y * cols + x]]
                    cv2.rectangle(res, (x * 80, y * 80), (x * 80 + 80, y * 80 + 80), color, -1)
                    
        return res


    def compute_color_probabilities_base(pixels, palette, k): 
        
        # base layer
        distances = scipy.spatial.distance.cdist(pixels, palette.colors) #calculate euclidean distance
    
        maxima = np.amax(distances, axis=1) #finds the maxima along the horizontal (indicated by the axis = 1 command)
      
        distances = (maxima[:, None] - distances) #maxima might be used for scaling purposes? 
        summ = np.sum( distances , 1) # computes the sum distances along the horizontal
        distances /= summ[:, None] # scaling the new distance value with sum - presumably to ensure its between 0 -1        
        base_layer = np.cumsum(distances, axis=1, dtype=np.float32)  

        return base_layer
        '''
        returns the cumulative sum of each pixel on the palette and their probability distribution. 
        This is done to give an idea of the likelihood or cumulative probabiliy than a pixel will be represented by a color on the palette. This is basically
        done to provide a "relative" likelihood for a pixel to be represented by a color, after all the calculations we did previously, this gives us the final 
        idea of which color a pixel will be chosen to have.
        
        maxima = np.amax(distances, axis=1) #finds the maxima along the horizontal (indicated by the axis = 1 command)
      
        distances = maxima[:, None] - distances #maxima might be used for scaling purposes? 
        summ = np.sum(distances, 1) # computes the sum distances along the horizontal
        distances /= summ[:, None] # scaling the new distance value with sum - presumably to ensure its between 0 -1

        distances = np.exp(k*len(palette)*distances) #computing the exponential within an array and stretching it across a given k for each distances (within the array)
        summ = np.sum(distances, 1) #computes the sum distances along the horizontal
        distances /= summ[:, None] #scaling the new distance value with sum - presumably to ensure its between 0-1    
        return np.cumsum(distances, axis=1, dtype=np.float32)    
        '''
    def compute_color_probabilities_top(pixels, palette, k): 
        
        # top layer
        distances = scipy.spatial.distance.cdist(pixels, palette.colors) #calculate euclidean distance
        maxima = np.amax(distances, axis=1) #finds the maxima along the horizontal (indicated by the axis = 1 command)
      
        distances = np.exp(maxima[:, None] - distances) #maxima might be used for scaling purposes? 
        summ = np.sum( distances , 1) # computes the sum distances along the horizontal
        distances /= summ[:, None] # scaling the new distance value with sum - presumably to ensure its between 0 -1
        top_layer = np.cumsum(distances, axis=1, dtype=np.float32)  
        
        return top_layer
    
    def __len__(self):
        return len(self.colors)

    def __getitem__(self, item):
        return self.colors[item]