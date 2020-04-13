def getCount(inputStr):
  listVowels = ["a", "e", "i", "o", "u"]
  num_vowels = [True if x in listVowels else False for x in inputStr]
  
  return (num_vowels.count(True))