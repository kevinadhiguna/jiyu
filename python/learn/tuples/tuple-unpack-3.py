newYorkTeams = ("yankees", "mets", "giants", "knicks", "jets")

print("New York sports teams : {}".format(newYorkTeams))

print("\nCase 1 : (set1, *set2, set3) = newYorkTeams")
# If the asterisk is set to another variable than the last, Python will 
#   assign values to the variable until the number of values left matches the number of variables left 
(set1, *set2, set3) = newYorkTeams

print("set1 : {}".format(set1)) # yankees
print("set2 (*set2) : {}".format(set2)) # ['mets', 'giants', 'knicks']
print("set3 : {}".format(set3)) # jets

# ---------------------------------------------------------------------

print("\nCase 2 : (*set4, set5, set6) = newYorkTeams")
(*set4, set5, set6) = newYorkTeams

print("set4 (*set4) : {}".format(set4)) # ['yankees', 'mets', 'giants']
print("set5 : {}".format(set5)) # knicks
print("set6 : {}".format(set6)) # jets
