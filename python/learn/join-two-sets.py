mariners = {"castillo", "j-rod", "france"}
athletics = {"langeliers", "rooker", "ruiz"}

west_coast_team = mariners.union(athletics)

print("West coast team : {}".format(west_coast_team))    # {'ruiz', 'castillo', 'langeliers', 'rooker', 'j-rod', 'france'}

# Alternatively one can utilize update() to join a couple of sets :
west_coast_team2 = mariners.union(athletics)

print("West coast team 2 : {}".format(west_coast_team2)) # {'ruiz', 'castillo', 'langeliers', 'rooker', 'j-rod', 'france'}

### Take into account that both union() and update() deny any duplicates ###
