class Dodgers:
  # The __init__ function is pretty much like a setter 
  def __init__(self, headcoach, ws_win, gm):
    self.headcoach = headcoach
    self.ws_win = ws_win
    self.gm = gm

club = Dodgers(
  "Dave Roberts",
  2020,
  "Andrew Friedman"
)

print("Dodgers' headcoach :", club.headcoach) # Dave Roberts
print("Dodgers' World Series win year :", club.ws_win) # 2020
print("Dodgers' gm :", club.gm) # Andrew Friedman
