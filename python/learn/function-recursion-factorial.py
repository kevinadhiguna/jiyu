def factorial(number):
  if number <= 0:
    print("Please try again with a positive number..")
  elif number == 1:
    # return 1
    return number
  else:
    return number * factorial(number-1)

count = 9   # 9! = 362880
result = factorial(count)

print("Result of {}!".format(count), ":", result)
