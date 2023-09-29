cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals (BEFORE) : {}".format(cardinals)) # {'league': 'NL', 'city': 'St. Louis'}

cardinals.pop("city")

print("Cardinals (AFTER) : {}".format(cardinals)) # {'league': 'NL'}
