fruit = ("mango", ) # <- DO End with a comma. Otherwise, it is considered a string

print("fruit : {}".format(fruit)) # ('mango',)
print("type of fruit : {}".format(type(fruit))) # <class 'tuple'>

# ---------------------------------------------

# NOT a tuple:
fruit2 = ("mango")

print("fruit2 : {}".format(fruit2)) # mango
print("type of fruit2 : {}".format(type(fruit2))) # <class 'str'>
