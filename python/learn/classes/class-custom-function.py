class Dodgers:
  def __init__(self, headcoach, ws_win, gm):
    self.headcoach = headcoach
    self.ws_win = ws_win
    self.gm = gm
  
  def promptYear(self):
    print("The Dodgers won the World Series in", self.ws_win)

club = Dodgers(
  "Dave Roberts",
  2020,
  "Andrew Friedman"
)

club.promptYear() # The Dodgers won the World Series in 2020
