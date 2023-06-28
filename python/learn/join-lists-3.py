dodgers_players = ["freeman", "muncy", "outman", "vargas", "betts"]
dodgers_players_2 = ["taylor", "kershaw", "miller", "graterol", "smith"]

print("Dodgers players (before the list is extended) : {}".format(dodgers_players))
# ['freeman', 'muncy', 'outman', 'vargas', 'betts']

dodgers_players.extend(dodgers_players_2)
print("Dodgers players (after the list is extended) : {}".format(dodgers_players))
# ['freeman', 'muncy', 'outman', 'vargas', 'betts', 'taylor', 'kershaw', 'miller', 'graterol', 'smith']
