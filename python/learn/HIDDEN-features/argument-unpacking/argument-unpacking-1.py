def numbers(num1, num2, num3, num4):
    print(num1, num2, num3, num4)

lst = [1, 2, 3, 4]

# Common way
numbers(lst[0], lst[1], lst[2], lst[3]) # 1 2 3 4

# Use an asterisk or an unpack operator (instead of accessing and passing each value in an iterable, one-by-one)
numbers(*lst) # 1 2 3 4
