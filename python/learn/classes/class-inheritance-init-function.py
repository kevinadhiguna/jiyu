class Dodgers:
  def __init__(self, headcoach, ws_win, gm):
    self.headcoach = headcoach
    self.ws_win = ws_win
    self.gm = gm
  
  def printCoachAndGM(self):
    print(self.headcoach, "-", self.gm)

club = Dodgers(
  "Dave Roberts", 
  2020, 
  "Andrew Friedman"
)
club.printCoachAndGM() # Dave Roberts - Andrew Friedman

class OklahomaCity(Dodgers):
  def __init__(self, headcoach, ws_win, gm):
    Dodgers.__init__(self, headcoach, ws_win, gm)

club2 = OklahomaCity(
  "Dave Roberts", 
  2020, 
  "Andrew Friedman"
)
club2.printCoachAndGM() # Dave Roberts - Andrew Friedman
