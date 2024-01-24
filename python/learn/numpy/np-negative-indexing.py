import numpy as np

arr = np.array([[1,2,3], [4,5,6]])
print("arr:", arr)
# [[1 2 3]
#  [4 5 6]]

print("arr[1, 1]:", arr[1, 1]) # 5
print("arr[1, 0]:", arr[1, 0]) # 4

print("arr[1, -1]:", arr[1, -1]) # 6 
print("arr[1, -2]:", arr[1, -2]) # 5

# Note: index -1 is the last item of an array
