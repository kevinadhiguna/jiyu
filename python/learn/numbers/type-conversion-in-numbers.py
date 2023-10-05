j = 100 # int
f = 4.5 # float
k = 46j # complex

print("j: {}".format(j))
print("f: {}".format(f))
print("k: {}".format(k))

# Convert from int to float:
l = float(j)

# Convert from float to int:
m = int(f)

# Convert from int to complex:
n = complex(j)

print("l (from j): {}".format(l)) # 100.0
print("m (from f): {}".format(m)) # 4
print("n (from j): {}".format(n)) # (100+0j)

print("type of l: ", type (l)) # <class 'float'>
print("type of m: ", type (m)) # <class 'int'>
print("type of n: ", type (n)) # <class 'complex'>
