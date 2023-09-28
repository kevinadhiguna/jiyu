countries = ("japan", "usa", "uk", "australia", "spain")
print("countries (BEFORE) : {}".format(countries)) # ('japan', 'usa', 'uk', 'australia', 'spain')

nations = list(countries)
print("nations (BEFORE) : {}".format(nations)) # ['japan', 'usa', 'uk', 'australia', 'spain']

nations[0] = "singapore"
print("nations (AFTER) : {}".format(nations)) # ['singapore', 'usa', 'uk', 'australia', 'spain']

countries = tuple(nations)
print("countries (AFTER) : {}".format(countries)) # ('singapore', 'usa', 'uk', 'australia', 'spain')
