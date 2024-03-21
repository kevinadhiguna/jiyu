def multiply(*args):
    print("args :", args)
    print("type(args) :", type(args))
    # =============== #
    total = 1
    for arg in args:
        total *= arg
    return total

print("Multiplication result :", multiply(3, 5))
# args : (3, 5)
# type(args) : <class 'tuple'>
# 15

print("Multiplication result :", multiply(3, 5, 7))
# args : (3, 5, 7)
# type(args) : <class 'tuple'>
# 105

print("Multiplication result :", multiply(3, 5, 7, 9))
# args : (3, 5, 7, 9)
# type(args) : <class 'tuple'>
# 945

print(multiply(3, 5, 7, 9, 11))
# args : (3, 5, 7, 9, 11)
# type(args) : <class 'tuple'>
# 10395
