import pytesseract
from pytesseract import Output
import cv2

img = cv2.imread('receipt_demo_abr.png')
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Blueberry\AppData\Local\Programs\Tesseract-OCR\tesseract'
d = pytesseract.image_to_data(img, output_type=Output.DICT)
n_boxes = len(d['level'])
for i in range(n_boxes):
    (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
    img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
cv2.imshow('img', img)
cv2.waitKey(0)
cv2.imwrite("receipt_demo_abr_ocr.png", img)