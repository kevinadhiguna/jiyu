class Dodgers:
  def __init__(self, headcoach, ws_win, gm):
    self.headcoach = headcoach
    self.ws_win = ws_win
    self.gm = gm

  # Display an output in a way it is structured
  def __str__(self):
    return f"{self.headcoach} - {self.gm} ({self.ws_win})"

club = Dodgers(
  "Dave Roberts",
  2020,
  "Andrew Friedman"
)

print("Club :", club) # Dave Roberts - Andrew Friedman (2020)
