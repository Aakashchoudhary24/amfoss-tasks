import os
import cv2
from PIL import Image, ImageDraw

def pixel_merge(folder_path):
    image_set = sorted([img for img in os.listdir(folder_path) if img.endswith('.png')])
    output_image = Image.new('RGB',(512, 512), 'white')
    draw = ImageDraw.Draw(output_image)
    previous_coordinates = None
    
    for current_image in image_set:
        image_path = os.path.join(folder_path, current_image)
        image = cv2.imread(image_path)
        
        if image.mean() == 255:
            previous_coordinates = None
            continue
        
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        _, thresh = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV) 
        # what change does NONE and SIMPLE make in the below line?
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        
        if contours:
            M = cv2.moments(contours[0])
            x_coordinate = int(M["m10"] / M["m00"])
            y_coordinate = int(M["m01"] / M["m00"])
            color_bgr = image[y_coordinate, x_coordinate]
            color_rgb = (color_bgr[2], color_bgr[1], color_bgr[0])
            
            if previous_coordinates:
                draw.line((previous_coordinates, (x_coordinate, y_coordinate)), fill=color_rgb, width = 5)
            
        previous_coordinates = (x_coordinate, y_coordinate)  
         
    output_image.save('/home/aakash/amfoss-tasks/task-10/Operation-Pixel-Merge/output/secret.png')
    
pixel_merge('../assets/')