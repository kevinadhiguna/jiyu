giants = {"Doval", "Crawford", "Estrada"}

print("Giants (BEFORE) : {}".format(giants)) # {'Crawford', 'Doval', 'Estrada'}

# Deletes a set completely
del giants

print("Giants (AFTER) : {}".format(giants)) # NameError: name 'giants' is not defined
