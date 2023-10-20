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

print("Club (BEFORE) :", club) # <__main__.Dodgers object at 0x7f6a46f27fd0>

del club

print("Club (AFTER) :", club) # NameError: name 'club' is not defined
