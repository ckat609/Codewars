def isodd(number):
  return True if int(number)%2 != 0 else False

def iq_test(numbers):
  mynumbers = numbers.split(" ")
  i = 0
  countOdd = 0
  countEven = 0
  diff = 0
  for number in mynumbers:
    isit = isodd(number)

    if isit:
      countOdd+=1
    else:
      countEven+=1
  i=0
  for number in mynumbers:
    isit = isodd(number)
    if countOdd > countEven:
      if not isit:
        diff = i
    elif countEven > countOdd:
      if isit:
        diff = i
    #print(str(isit) + " : " + number)
    i+=1
  return(diff+1)