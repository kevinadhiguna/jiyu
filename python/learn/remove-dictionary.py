cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals (BEFORE) : {}".format(cardinals)) # {'league': 'NL', 'city': 'St. Louis'}

# Vanishes the dictionary completely
del cardinals

# print("Cardinals (AFTER) : {}".format(cardinals)) # NameError: name 'cardinals' is not defined
