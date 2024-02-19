def parse_values(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

friend = {
    "name": "Jane",
    "age": 21,
}

# Common way:
# parse_values(friend["name"], friend["age"]) # <- TypeError: parse_values() takes 0 positional arguments but 2 were given

# Asterisk/Unpack operator:
parse_values(**friend)

# -- Output -- #
# name Jane
# age 21
# ------------ #
