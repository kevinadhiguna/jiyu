print("'{0:.2%}'.format(1/6)) : ", '{0:.2%}'.format(1/6)) # 16.67%

# Here's a breakdown of the format string {0:.2%}:
# {0} : This is a positional argument that refers to the first value passed to the format() method.
# :   : This separates the field name from the format specifier.
# .2  : This specifies that the number should be rounded to two decimal places.
# %   : This specifies that the number should be formatted as a percentage.

print("'{0:.3%}'.format(1/8)) : ", '{0:.3%}'.format(1/8)) # 12.500%
print("'{0:.4%}'.format(1/5)) : ", '{0:.4%}'.format(1/5)) # 20.0000%
print("'{0:.5%}'.format(1/4)) : ", '{0:.5%}'.format(1/4)) # 25.00000%
print("'{0:.6%}'.format(1/2)) : ", '{0:.6%}'.format(1/2)) # 50.000000%
