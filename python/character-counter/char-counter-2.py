from collections import defaultdict

def default():
    return 0

char_count = defaultdict(default)
string = "ziwelknfafaflkmscssafazpok"

for char in string:
    char_count[char] += 1

print(f"Character counter from '{string}':", char_count)
# Output:defaultdict(<function default at 0x7f37b2353d90>, {'z': 2, 'i': 1, 'w': 1, 'e': 1, 'l': 2, 'k': 3, 'n': 1, 'f': 4, 'a': 4, 'm': 1, 's': 3, 'c': 1, 'p': 1, 'o': 1})
