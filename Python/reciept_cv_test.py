import pytesseract

pytesseract.pytesseract.tesseract_cmd = r'C:\Users\Blueberry\AppData\Local\Programs\Tesseract-OCR\tesseract'
print(pytesseract.image_to_string(r'sample_2.jpg'))