reds = {"De La Cruz", "India", "McClain", "Cruz"}
orioles = {"Rustchman", "G-Rod", "Henderson", "Cruz"}

# Keeps distinct value(s) and drops same values presented in both sets :
reds.symmetric_difference_update(orioles)
print("Reds : {}".format(reds)) # {'De La Cruz', 'India', 'McClain', 'G-Rod', 'Henderson', 'Rustchman'}

# Produces a new set that has unique values among both sets :
reds.symmetric_difference(orioles)
print("Reds : {}".format(reds)) # {'De La Cruz', 'India', 'McClain', 'G-Rod', 'Henderson', 'Rustchman'}

##########################################

# True and 1 are considered same values
random_set1 = {True, False, 1}

random_set1.symmetric_difference(random_set1)

print("\n -- True and 1 are considered same values --")
print("random_set1 : {}".format(random_set1)) # {False, True}
