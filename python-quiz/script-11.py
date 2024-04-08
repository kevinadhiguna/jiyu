print([i.upper() for i in "Hello World!"])
# ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D', '!']

print([j.lower() for j in "Meary Jane"])
# ['m', 'e', 'a', 'r', 'y', ' ', 'j', 'a', 'n', 'e']

vowels = "aiueo"
greeting = "Konnichiwa, Sekai"

text = [print(k) for k in greeting if k not in vowels]
# K
# n
# n
# c
# h
# w
# ,
#  
# S
# k
