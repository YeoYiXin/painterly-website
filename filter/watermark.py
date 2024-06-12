from PIL import ImageFont, ImageDraw

def watermarked(img):
    words = "PainterLy"

    w,h = img.size #width, height of image
    x = int(w/6) #width of words
    y = int(h/6) #height of words
    if x>y: #always choose the smaller one
        font_size = y
    elif y>x:
        font_size = x
    else:
        font_size = x 
    
    font = ImageFont.truetype(font="arial.ttf", size=int(font_size/3))
    draw = ImageDraw.Draw(img)
    tw, th = font.getmask(words).size
    draw.rectangle([(0,0), (10+tw,15+th)],fill="black", outline=None)
    draw.text((5, 0), words, fill=(204, 204, 204), font=font)
    return img