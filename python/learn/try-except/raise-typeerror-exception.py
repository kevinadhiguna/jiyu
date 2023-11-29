variable = "Hi"

if not type(variable) is int:
  raise TypeError("Please check your variable, only integers are allowed!")

# == Output == #
# Traceback (most recent call last):
#   File "/home/user/raise-typeerror-exception.py", line 4, in <module>
#     raise TypeError("Please check your variable, only integers are allowed!")
# TypeError: Please check your variable, only integers are allowed!
# ============
