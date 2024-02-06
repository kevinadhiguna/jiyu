import numpy as np

arr = np.arr([1, 3, 4, 9, 12])

print("Old Array:", arr)

new_array = np.array_split(arr, 2)

print("Splitted Array:", new_array)
