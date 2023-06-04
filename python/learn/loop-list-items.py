relievers = ["Duran", "Joyce", "Iglesias"]

for reliever in relievers:
  print("relievers : {}".format(reliever))

# relievers : Duran
# relievers : Joyce
# relievers : Iglesias

print("\n")
# ---

# Loop through the index numbers
for i in range(len(relievers)):
  print("reliever-{}".format(i+1), ": {}".format(relievers[i]))

# reliever-1 : Duran
# reliever-2 : Joyce
# reliever-3 : Iglesias
