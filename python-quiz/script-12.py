clubs = {
    1: "Real Madrid",
    2: "FC Bayern Munchen",
    3: "Manchester City",
    4: "Juventus",
}

print("clubs.get(1, 2):", clubs.get(1, 2)) # Real Madrid
print("clubs.get(1, 3):", clubs.get(1, 3)) # Real Madrid
print("clubs.get(1, 4):", clubs.get(1, 4)) # Real Madrid
print("clubs.get(1, 5):", clubs.get(1, 5)) # Real Madrid

print("clubs.get(2, 2):", clubs.get(2, 2)) # FC Bayern Munchen
print("clubs.get(2, 3):", clubs.get(2, 3)) # FC Bayern Munchen
print("clubs.get(2, 4):", clubs.get(2, 4)) # FC Bayern Munchen
