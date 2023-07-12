programming_languages = ("javascript", "python", "go", "sql", "java")

print("programming languages (BEFORE) : {}".format(programming_languages)) # ('javascript', 'python', 'go', 'sql', 'java')

pl = list(programming_languages)
pl.remove("sql")

programming_languages = tuple(pl)
print("programming languages (AFTER) : {}".format(programming_languages)) # ('javascript', 'python', 'go', 'java')
