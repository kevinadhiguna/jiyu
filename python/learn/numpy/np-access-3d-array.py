import numpy as np

arr = np.array([[[1,2,3], [4,5,6]], [[7,8,9], [10,11,12]]])
print("arr:", arr)
# [[[ 1  2  3]
#   [ 4  5  6]]
#
#  [[ 7  8  9]
#   [10 11 12]]]

print("3rd element in 2nd item in 1st block:", arr[0, 1, 2]) # 6
print("2nd element in 2nd item in 2nd block:", arr[1, 1, 1]) # 11
