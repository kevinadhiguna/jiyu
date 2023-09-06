i = 14

while i != 18:
  i += 1

  if i == 16:
    print("i has reached 16, yet still continues to increment")
    continue

  print("i : {}".format(i))

# === Output ===
# i : 15
# i has reached 16, yet still continues to increment
# i : 17
# i : 18
