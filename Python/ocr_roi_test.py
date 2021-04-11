import pytesseract
from pytesseract import Output
import cv2

img = cv2.imread('receipt_demo_abr.png')
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Blueberry\AppData\Local\Programs\Tesseract-OCR\tesseract'
d = [20] # pytesseract.image_to_data(img, output_type=Output.DICT)
print(d)
'''
n_boxes = len(d['level'])
for i in range(n_boxes):

(x, y, w, h) = ([20], [20], [20], [20])
print(x, y, w, h)
'''

img = cv2.rectangle(img,(20,100),(100,250), (0, 100, 200), 2)
#cv2.imshow('img', img)
#cv2.waitKey(0)
# cv2.imwrite("receipt_demo_abr_ocr.png", img)

# image cropped
(x, y, w, h) = (20, 100, 100, 280)
crop_img = img[y:y+h, x:x+w]
cv2.imshow("cropped", crop_img)
cv2.waitKey(0)