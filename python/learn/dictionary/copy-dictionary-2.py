cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals : {}".format(cardinals)) # {'league': 'NL', 'city': 'St. Louis'}

eagles = dict(cardinals) # <- Another method to duplicate a dictionary

print("Eagles : {}".format(eagles)) # {'league': 'NL', 'city': 'St. Louis'}
