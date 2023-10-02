# Used if one does not know how many arguments that will be passed into your function
def theBestStudent(*pupils):
  print("The best student is :", pupils[2])

theBestStudent("Trout", "Judge", "Ohtani") # The best student is : Ohtani
theBestStudent("Trout") # IndexError: tuple index out of range
theBestStudent("Trout", "Judge") # IndexError: tuple index out of range
