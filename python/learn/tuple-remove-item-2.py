programming_languages = ("javascript", "python", "go", "sql", "java")

print("programming languages (BEFORE) : {}".format(programming_languages))

del programming_languages

print("programming languages (AFTER) : {}".format(programming_languages)) # NameError: name 'programming_languages' is not defined
