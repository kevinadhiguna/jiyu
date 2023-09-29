dodgers = {
  "league": "NL",
  "gm": "Andrew Friedman",
}

print("dodgers['league'] : {}".format(dodgers["league"])) # NL
print("dodgers['gm'] : {}".format(dodgers["gm"])) # Andrew Friedman

# Alternatively, one can utilize get() method as well :
print("\ndodgers.get('league') : {}".format(dodgers.get("league"))) # NL
print("dodgers.get('gm') : {}".format(dodgers.get("gm"))) # Andrew Friedman
