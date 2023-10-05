# normal sort regardless of capital letters and small letters

tools = ["pitchcoms", "gloves", "Bats", "caps", "Sun_glasses"]
print("tools (before being sorted) : {}".format(tools)) # ['pitchcoms', 'gloves', 'Bats', 'caps', 'Sun_glasses']

tools.sort(key = str.lower)
print("tools (after being sorted) : {}".format(tools)) # ['Bats', 'caps', 'gloves', 'pitchcoms', 'Sun_glasses']
