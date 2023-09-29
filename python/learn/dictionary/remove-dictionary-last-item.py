cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals (BEFORE) : {}".format(cardinals)) # {'league': 'NL', 'city': 'St. Louis'}

# Removes the last item
cardinals.popitem()

print("Cardinals (AFTER) : {}".format(cardinals)) # {'league': 'NL'}
