char_count = {}

string = "ziwelknfafaflkmscssafazpok"

for char in string:
    if char not in char_count:
        char_count[char] = 0
    
    char_count[char] += 1

print(f"Character counter from '{string}':", char_count)
# Output: {'z': 2, 'i': 1, 'w': 1, 'e': 1, 'l': 2, 'k': 3, 'n': 1, 'f': 4, 'a': 4, 'm': 1, 's': 3, 'c': 1, 'p': 1, 'o': 1}
