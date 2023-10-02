top_lineup = ["Stanton", "Olson", "Freeman", "Rustchman", "Bichette"]
print("Top of lineup (BEFORE): {}".format(top_lineup)) # ['Stanton', 'Olson', 'Freeman', 'Rustchman', 'Bichette']

top_lineup.pop(2)
print("Top of lineup (AFTER) : {}".format(top_lineup)) # ['Stanton', 'Olson', 'Rustchman', 'Bichette']

# Having no index specified, the last item of the list is removed
top_lineup.pop()
print("Top of lineup (AFTER removing the last item) : {}".format(top_lineup)) # ['Stanton', 'Olson', 'Rustchman']

# 'del top_lineup[1]' is pretty much same as 'top_lineup.pop(1)'
del top_lineup[1]
print("Top of lineup (AFTER 1st item is removed) : {}".format(top_lineup)) # ['Stanton', 'Rustchman']
