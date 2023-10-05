top_lineup = ["Stanton", "Olson", "Freeman", "Rustchman", "Bichette"]
print("Top of lineup (BEFORE): {}".format(top_lineup)) # ['Stanton', 'Olson', 'Freeman', 'Rustchman', 'Bichette']

top_lineup.clear()
print("Top of lineup (AFTER) : {}".format(top_lineup)) # [] 

# ---

bottom_lineup = ["Neto", "Vargas", "Matijevic", "Riley", "Higashioka"]
print("Bottom of lineup (BEFORE) : {}".format(bottom_lineup)) # ["Neto", "Vargas", "Matijevic", "Riley", "Higashioka"]

# Does the same thing as 'bottom_lineup.clear()' but not only does the list get empty, it gets undefined as well
del bottom_lineup
print("Bottom of lineup (AFTER)  : {}".format(bottom_lineup)) # NameError: name 'bottom_lineup' is not defined
