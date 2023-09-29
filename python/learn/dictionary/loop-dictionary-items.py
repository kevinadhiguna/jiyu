cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

for item in cardinals:
  # Prints keys
  print("Key : {}".format(item))

  # Displays values of keys
  print("Value of {}".format(item), "in dictionary : {}".format(cardinals[item]))

# === Output === #
# Key : league
# Value of league in dictionary : NL
# Key : city
# Value of city in dictionary : St. Louis
