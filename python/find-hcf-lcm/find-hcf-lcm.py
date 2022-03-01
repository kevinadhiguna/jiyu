def find_hcf (x, y):
    while(y):
        x, y = y, x % y
    return x

a, b = 50, 70
hcf = find_hcf(a, b)
lcm = a * b // hcf

print("The Highest Common Factor (HCF) of {} and {} is {}.".format(a, b, hcf))
print("The Lowest Common Multiple (LCM) of {} and {} is {}.".format(a, b, lcm))
