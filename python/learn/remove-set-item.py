dodgers = {"Betts", "Freeman", "Bellinger"}

# Be careful, remove() will raise an error if the item is non-existent
dodgers.remove("Bellinger")

print("Dodgers (after remove()) : {}".format(dodgers)) # {'Freeman', 'Betts'}

# discard() is more preferred
dodgers.discard("Betts")

print("Dodgers (after discard()) : {}".format(dodgers)) # {'Freeman'}
