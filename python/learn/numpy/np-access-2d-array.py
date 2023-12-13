import numpy as np

arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])
print("arr:", arr)
# [[ 1  2  3  4  5]
#  [ 6  7  8  9 10]]

print("Access the value of 1st element on 2nd row:", arr[1,0]) # 6
print("Access the value of 2nd element on 1st row:", arr[0,1]) # 2
