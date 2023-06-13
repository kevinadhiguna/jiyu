top_lineup = ["Stanton", "Olson", "Freeman", "Rustchman", "Bichette"]
middle_lineup = ["Turner", "Hernandez", "Soler", "Drury", "Arraez"]

top_lineup.extend(middle_lineup) 
print("top of lineup: {}".format(top_lineup)) # ['Stanton', 'Olson', 'Freeman', 'Rustchman', 'Bichette', 'Turner', 'Hernandez', 'Soler', 'Drury', 'Arraez']

# One can also add any iterable lists (sets, tuples, dictionaries, etc.)
bottom_lineup = ("Neto", "Vargas", "Matijevic", "Riley", "Higashioka")

middle_lineup.extend(bottom_lineup)
print("middle of lineup: {}".format(middle_lineup)) # ['Turner', 'Hernandez', 'Soler', 'Drury', 'Arraez', 'Neto', 'Vargas', 'Matijevic', 'Riley', 'Higashioka']
