def close_to_10(n):
  return abs(n-10)

numbers = [13, 9, 11, 15, 17]
print("numbers (before being sorted) : {}".format(numbers)) # [13, 9, 11, 15, 17]

numbers.sort(key = close_to_10)
print("numbers (after being sorted) : {}".format(numbers)) # [9, 11, 13, 15, 17]
