import numpy as np

arr = np.array([1,2,3,4,5,6,7,8,9])
print("arr:", arr) # [1 2 3 4 5 6 7 8 9]

print("arr[1:4] :", arr[1:4]) # [2 3 4]
print("arr[3:] :", arr[3:]) # [4 5 6 7 8 9]
print("arr[:3] :", arr[:3]) # [1 2 3]

# Negative slicing
print("arr[-4:-1] :", arr[-4:-1]) # [6 7 8]
