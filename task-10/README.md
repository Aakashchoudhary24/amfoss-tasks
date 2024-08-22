# Initial thought process : 
1) How to sort the images based on the last 2 digits in their names 
   found this script on stack overflow for the above issue :

   import os
   import os.path
   images = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

2) Identify the dots on each image and their initial coordinates and colors
3) Make a new blank image i.e. an image with background color, size 512X512, and mode RGB
4) How to overlay the images on one another, like layers
4) Join the dots with lines of color black
5) don't draw lines if a blank image encountered

# Final procedure : 
0) Sort the images according to their last 2 digits
1) Make a new blank image with mode : RGB, dimensions : 512x512, background color : #181818
2) Loop over the set of images sorted according to the last 2 digits
3) Initialize a variable to mark the position/coordinate of the previous point
4) Convert to grayscale and apply treshhold as we need to find out the Contours
5) Find the contours for the dots for outlining them which will further help find their centroid
5) Take the current position(x, y) and color of a point/blob
6) Convert the color back to RGB format
6) Draw a line to it from the previous coordinate and of the color of the previous coordinate
6) Set previous coordinate as None if white page encountered in the loop
7) Show the final image

# Resources Used :
1) Google
2) Stackoverflow
3) https://www.javatpoint.com/opencv
4) https://www.tutorialspoint.com/python_pillow/python_pillow_imagedraw_module.htm
5) https://www.javatpoint.com/opencv-image-threshold
6) https://www.javatpoint.com/opencv-contours
7) https://stackoverflow.com/questions/74196666/how-to-find-the-center-of-coordinates-of-yellow-colour-in-a-image-using-opencv