min_number = min(14, 233, 2)
max_number = max(1, 13, 333)

print("min_number : {}".format(min_number)) # 2
print("max_number : {}".format(max_number)) # 333

# -- Don't print like following --

# (Wrong)
# print("min_number :", min_number) # ('min_number :', 2)
# print("max_number :", max_number) # ('max_number :', 333)

# (Wrong)
# print("min_number :" + min_number) # TypeError: cannot concatenate 'str' and 'int' objects
# print("max_number :" + max_number) # TypeError: cannot concatenate 'str' and 'int' objects
