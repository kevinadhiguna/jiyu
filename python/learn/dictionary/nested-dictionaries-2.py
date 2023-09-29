pitchers = {
  "starter": "Luis Castillo",
  "closer": "Paul Sewald"
}

fielders = {
  "infielder": "JP Crawford",
  "outfielder": "Julio Rodriguez"
}

# One is also able to combine some dictionaries into a nested one
mariners = {
  "pitchers": pitchers,
  "fielders": fielders
}

print("Mariners : {}".format(mariners))

# === Output === #
# {
#   'pitchers': {'starter': 'Luis Castillo', 'closer': 'Paul Sewald'}, 
#   'fielders': {'infielder': 'JP Crawford', 'outfielder': 'Julio Rodriguez'}
# }
