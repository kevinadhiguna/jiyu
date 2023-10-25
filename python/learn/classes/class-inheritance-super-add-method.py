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

  def displayOklahomaClubInfo(self):
    print("\n--- Oklahoma ---")
    print("Oklahoma headcoach :", self.headcoach)
    print("Oklahoma GM :", self.gm)
    print("Oklahoma MVP :", self.mvp)

club2 = Oklahoma(
  "Josh Roberts",
  "Andrew Friedman",
  "Kieran McAllister",
)

club2.displayOklahomaClubInfo()
# Output:
# --- Oklahoma ---
# Oklahoma headcoach : Josh Roberts
# Oklahoma GM : Andrew Friedman
# Oklahoma MVP : Kieran McAllister
