athletes = "Messi, Ohtani, James, Woods, Hanyu, Djokovic, Phelps"

sports = "Football ; Baseball ; Basketball ; Golf ; Figure Skating ; Tennis ; Swimming"

athletes_splitted = athletes.split(",")
sports_splitted = sports.split(";")

print("athletes_splitted: {}".format(athletes_splitted))
# ['Messi', ' Ohtani', ' James', ' Woods', ' Hanyu', ' Djokovic', ' Phelps']

print("sports_splitted: {}".format(sports_splitted))
# ['Football ', ' Baseball ', ' Basketball ', ' Golf ', ' Figure Skating ', ' Tennis ', ' Swimming']
