# Regardless if the block raises an error or not, a finally block is executed
try:
  print("Hi, I am", x)
except NameError:
  print("NameError occurred")
except:
  print("An exception was raised")
finally:
  print("The finally block was executed")

# == Output == #
# NameError occurred
# The finally block was executed
# ============


try:
  print("Hi, there!")
except NameError:
  print("NameError occurred")
except:
  print("An exception was raised")
finally:
  print("The finally block was executed")

# == Output == #
# Hi, there!
# The finally block was executed
# ============
