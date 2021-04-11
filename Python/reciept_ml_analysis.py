'''
Uses Computer Vision and NLP to Analyze Reciepts
Inputs: A receipt with grocery items used on the dishes dataset
Outputs: A CSV with a list of food items in the reciept
Uses CV  to extract text from the receipt image, and uses NLP to
translate those abbreviations into words
'''

import pytesseract
import re
import csv
from pytesseract import Output
import cv2
import enchant
import pandas as pd
import food_word_cleaner as foodnlp

# text extraction
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Blueberry\AppData\Local\Programs\Tesseract-OCR\tesseract'
img = cv2.imread('receipt_demo_abr.png')
(x, y, w, h) = (10, 100, 100, 150)
crop_img = img[y:y+h, x:x+w]
cv2.imwrite("receipt_demo_abr_cropped.png", crop_img)
receipt_text = pytesseract.image_to_string(r'receipt_demo_abr_cropped.png')
print(receipt_text)
# m = re.findall(r"WALMART NO: [\d—-]+", receipt_text)
# receipt_text_list = []
# receipt_text_list = receipt_text.split()

# clean text for food words
food_words_list = []
food_words_list = receipt_text.split()
# food_words_list = foodnlp.sent_parse(receipt_text)
# print(food_words_list)

# nlp abbreviation translation
wordDict = enchant.Dict("en_US")

# inputWords = receipt_text_list
inputWords = food_words_list
suggested_words_list = []
for word in inputWords:
    suggested_words_list.append(wordDict.suggest(word))
    #print(wordDict.suggest(word))

# output to csv
with open('cleaned_foods_list.csv', 'w', newline='') as myfile:
    wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
    wr.writerow(suggested_words_list)

# display csv head
data = pd.read_csv("cleaned_foods_list.csv")
print(data.head())

# display ocr visualization
img = cv2.imread('receipt_demo_abr.png')

'''
d = pytesseract.image_to_data(img, output_type=Output.DICT)
n_boxes = len(d['level'])
for i in range(n_boxes):
    (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
    img = cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)

cv2.imshow('img', img)
cv2.waitKey(0)
cv2.imwrite("receipt_demo_abr_ocr.png", img)
'''

# display ocr in food roi
# img = cv2.rectangle(img,(20,100),(100,200), (0, 100, 200), 2)
cv2.imshow('crop_img', crop_img)
cv2.waitKey(0)
cv2.imwrite("receipt_demo_abr_ocr_roi.png", img)

