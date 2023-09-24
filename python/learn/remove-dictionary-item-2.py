cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals (BEFORE) : {}".format(cardinals)) # {'league': 'NL', 'city': 'St. Louis'}

# Deletes an item with the specified key name 
del cardinals["city"]

print("Cardinals (AFTER) : {}".format(cardinals)) # {'league': 'NL'}
