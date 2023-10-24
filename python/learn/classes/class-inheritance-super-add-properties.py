class Dodgers:
  def __init__(self, headcoach, gm):
    self.headcoach = headcoach
    self.gm = gm
  
  def greetGM(self):
    print("Hello Mr.", self.gm, "!")

club1 = Dodgers(
  "Dave Roberts",
  "Andrew Friedman"
)

club1.greetGM() # Hello Mr. Andrew Friedman !

class Oklahoma(Dodgers):
  def __init__(self, headcoach, gm, mvp):
    super().__init__(headcoach, gm)
    self.mvp = mvp

club2 = Oklahoma(
  "Josh Roberts",
  "Andrew Friedman",
  "Kieran McAllister",
)

print("Club 2 MVP :", club2.mvp) # Club 2 MVP : Kieran McAllister
