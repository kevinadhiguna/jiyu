import numpy as np

arr = np.array([1,2,3,4,5,6,7,8,9])
print("arr:", arr) # [1 2 3 4 5 6 7 8 9]

print("arr[2:9:1]:", arr[2:9:1]) # [3 4 5 6 7 8 9]
# index 2 = 3
# => index (previous index) + (STEP value) = (next index) = (value)
# index 2 + 1 = index 3 = 4
# index 3 + 1 = index 4 = 5
# index 4 + 1 = index 5 = 6
# index 5 + 1 = index 6 = 7
# index 6 + 1 = index 7 = 8
# index 7 + 1 = index 8 = 9

print("arr[3:7:2]:", arr[3:7:2]) # [4 6]
# index 3 = 4
# => index (previous index) + (STEP value) = (next index) = (value)
# index 3 + 2 = index 5 = 6
# index 5 + 2 = index 7 = X (index 7 is out of the range slice, so it's excluded..)

print("arr[1:8:3]:", arr[1:8:3]) # [2 5 8]
# index 1 = 2
# => index (previous index) + (STEP value) = (next index) = (value)
# index 1 + 3 = index 4 = 5
# index 4 + 3 = index 7 = 8
# index 7 + 3 = index 10 = X (index 10 is out of the range slice, so it's excluded..)



# Additional reference: https://www.freecodecamp.org/news/python-slicing-how-to-slice-an-array/
