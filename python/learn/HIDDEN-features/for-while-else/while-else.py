players = ['Ness', 'Chevalier', 'Ado', 'Gonzalez', 'De Luca']


# Common example
i = 0
found = False

while i < len(players):
    player = players[i]

    if player == 'Gonzalez':
        found = True
        print('Player found')
        break

    i += 1
if not found:
    print('Player not found, do something else')

# while-else example
j = 0

while j < len(players):
    player = players[j]

    if player == 'Gonzalez':
        print('Player found [while-else]')
        break
    
    j += 1
else:
    print('Player not found, do something else')
