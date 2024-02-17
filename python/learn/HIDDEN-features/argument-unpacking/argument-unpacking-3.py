def parse_values(target, key):
    print(target, key)

values = {
    "key": "5",
    "target": 10,
}

# Common way:
parse_values(values["key"], values["target"]) # 5 10

# Asterisk/Unpack operator:
parse_values(**values) # 10 5
