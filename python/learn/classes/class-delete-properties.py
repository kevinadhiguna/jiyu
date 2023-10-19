class Dodgers:
  def __init__(self, headcoach, ws_win, gm):
    self.headcoach = headcoach
    self.ws_win = ws_win
    self.gm = gm

club = Dodgers(
  "Dave Roberts",
  2020,
  "Andrew Friedman"
)

print("Club's GM (BEFORE) :", club.gm)

del club.gm

print("Club's GM (AFTER) :", club.gm) # AttributeError: 'Dodgers' object has no attribute 'gm'

print("Club's Headcoach (BEFORE) :", club.headcoach)

del club.headcoach

print("Club's Headcoach (AFTER) :", club.headcoach) # AttributeError: 'Dodgers' object has no attribute 'headcoach'
