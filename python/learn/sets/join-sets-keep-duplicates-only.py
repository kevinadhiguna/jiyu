pirates = {"Reynolds", "McCutchen", "Davis"}
giants = {"Reynolds", "Webb", "Cobb"}

# Only takes duplicates between mentioned two sets :
pirates.intersection_update(giants)

print("The duplicates only between Pirates and Giants : {}".format(pirates)) # {'Reynolds'}

# Create a new set that contains value(s) present in both sets :
pirates.intersection(giants)

print("The duplicates only between Pirates and Giants : {}".format(pirates)) # {'Reynolds'}
