players = ['Ness', 'Chevalier', 'Ado', 'Gonzalez', 'De Luca']


# Common example
i = 0
found = False

for player in players:
    if player == 'Gonzalez':
        found = True
        print('Player found')
        break

    i += 1
if not found:
    print('Player not found, do something else')

# for-else example
j = 0

for player in players:
    if player == 'Gonzalez':
        # No need to include a flag, such as 'found'
        print('Player found [for-else]')
        break
    
    j += 1
else:
    print('Player not found, do something else')
