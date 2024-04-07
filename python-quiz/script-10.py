print(
    min(max(-1, -9, False), 101, 1942, 1)
) # False

# (1) max(-1, -9, False) -> False (considered to be 0)
# (2) min(max(-1, -9, False), 101, 1942, 1) -> min(False, 101, 1942, 1) -> False

print(
    max(min(2, True, 3), -9, -2)
) # True

# (1) min(2, True, 3) -> True (considered to be 1)
# (2) max(min(2, True, 3), -9, -2) -> min(True, -9, -2) -> True
