bottom_lineup = ["Neto", "Vargas", "Matijevic", "Riley", "Higashioka"]

print("First item of {}".format(bottom_lineup), ":", bottom_lineup[0])  # Neto
print("Second item of {}".format(bottom_lineup), ":", bottom_lineup[1]) # Vargas
print("Last item of {}".format(bottom_lineup), ":", bottom_lineup[-1])  # Higashioka

bottom_lineup[0] = "Cronenworth"
bottom_lineup[1] = "Wade Jr."
bottom_lineup[-1] = "Wong"

print("\n-- After changes --")
print("First item of {}".format(bottom_lineup), ":", bottom_lineup[0])  # Cronenworth
print("Second item of {}".format(bottom_lineup), ":", bottom_lineup[1]) # Wade Jr
print("Last item of {}".format(bottom_lineup), ":", bottom_lineup[-1])  # Wong
