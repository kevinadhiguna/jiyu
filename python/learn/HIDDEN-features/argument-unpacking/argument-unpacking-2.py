def display_chars(char1, char2, char3):
    print(char1, char2, char3)

words = "NYY"

# Common way:
display_chars(words[0], words[1], words[2]) # NYY

# Argument Unpacking:
display_chars(*words) # NYY
