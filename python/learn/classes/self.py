# 'self' is a parameter that refers to the current instance of the class
class Dodgers:
  # def __init__(self, headcoach, ws_win, gm):
  #   self.headcoach = headcoach
  #   self.ws_win = ws_win
  #   self.gm = gm

  # -- NOTE --
  # These __init__ functions above and below works the same.
  #   Hence, 'self' does not have to be declared as 'self'
  #     Any variable can replace it as long as it is the first parameter of the class
  # ----------

  def __init__(dodgerblue, headcoach, ws_win, gm):
    dodgerblue.headcoach = headcoach
    dodgerblue.ws_win = ws_win
    dodgerblue.gm = gm

  def whoIsGM(dodgerblue):
    print("Who is the Dodgers' GM?", dodgerblue.gm)

club = Dodgers(
  "Dave Roberts",
  2020,
  "Andrew Friedman"
)

club.whoIsGM() # Who is the Dodgers' GM? Andrew Friedman
