a = 1

while True:
    print(f"a : {a}")
    print(f"a % 3 = {a} % 3 =", a % 3)
    if a % 3 == 0:
        print(f"a % 3 == 0 ({a} % 3 == 0)", "\n")
        break
    print(a, "\n")

    a += 1

# Output:
# a : 1
# a % 3 = 1 % 3 = 1
# 1 
#
# a : 2
# a % 3 = 2 % 3 = 2
# 2 
#
# a : 3
# a % 3 = 3 % 3 = 0
# a % 3 == 0 (3 % 3 == 0)
