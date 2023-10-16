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

print("Club's GM (BEFORE) :", club.gm) # Andrew Friedman

club.gm = "Andrea Locatelli"

print("Club's GM (AFTER) :", club.gm) # Andrea Locatelli

print("Club's Headcoach (BEFORE) :", club.headcoach) # Dave Roberts

club.headcoach = "Antonio Garcia"

print("Club's Headcoach (AFTER) :", club.headcoach) # Antonio Garcia
