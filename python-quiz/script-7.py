a = 1
b = a
c = 1
d = 2

print("a:", a, ", id(a):", id(a)) # a: 1 , id(a): 123625982394608
print("b:", b, ", id(b):", id(b)) # b: 1 , id(b): 123625982394608
print("c:", c, ", id(c):", id(c)) # c: 1 , id(c): 123625982394608
print("d:", d, ", id(d):", id(d)) # d: 2 , id(d): 123625982394640

# An id() function returns an integer that represents the memory address of the object (per Geeksforgeeks)
