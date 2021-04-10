'''
Uses Computer Vision and NLP to Analyze Reciepts
Inputs: A receipt with grocery items used on the dishes dataset
Outputs: A CSV with a list of food items in the reciept
Uses CV  to extract text from the receipt image, and uses NLP to
translate those abbreviations into words
'''
from PIL import Image
import pytesseract
import enchant
import food_word_cleaner as foodnlp

# text extraction
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Blueberry\AppData\Local\Programs\Tesseract-OCR\tesseract'
receipt_text = pytesseract.image_to_string(r'receipt_demo_abr.png')
m = re.findall(r"MASTER-AIRWAYBILL NO: [\d—-]+", receipt_text)
# receipt_text_list = []
# receipt_text_list = receipt_text.split()

# clean text for food words
food_words_list = []
food_words_list = foodnlp.sent_parse(receipt_text)

# nlp abbreviation translation
wordDict = enchant.Dict("en_US")

# inputWords = receipt_text_list
inputWords = food_words_list
suggested_words_list = []
for word in inputWords:
    suggested_words_list.append(wordDict.suggest(word))
    print(wordDict.suggest(word))



