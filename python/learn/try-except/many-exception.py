try:
  print("Hello, I am", a)
except NameError:
  print("NameError occurred")
except:
  print("An exception occurred")

# == Output == #
# NameError occurred
# ============
