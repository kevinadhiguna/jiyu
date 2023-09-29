cardinals = {
  "league": "NL",
  "city": "St. Louis"
}

print("Cardinals['city'] (BEFORE) : {}".format(cardinals["city"])) # St. Louis

cardinals.update({ "city": "Denver" })
# cardinals["city"] = "Denver"          # <- Another way to update

print("Cardinals['city'] (AFTER) : {}".format(cardinals["city"])) # Denver
