import enchant

wordDict = enchant.Dict("en_US")

'''
inputWords = ['wtrbtl','bwlingbl','bsktball','PISTACH']
for word in inputWords:
    print(wordDict.suggest(word))
'''

inputWords = ['onin','grlic','lmon','buttr','bnana','mlk','eggs','pinaple']
for word in inputWords:
    print(wordDict.suggest(word))