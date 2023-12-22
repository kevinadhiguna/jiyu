import numpy as np

a = np.array(7)
b = np.array([1, 2, 3])
c = np.array([[1, 2, 3], [4, 5, 6]])
d = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])

print("a's array dimension:", np.ndim(a)) # 0
print("b's array dimension:", np.ndim(b)) # 1
print("c's array dimension:", np.ndim(c)) # 2
print("d's array dimension:", np.ndim(d)) # 3
