# producing all capital letters being sorted before lower case letters

tools = ["pitchcoms", "gloves", "Bats", "caps", "Sun_glasses"]
print("tools (before being sorted) : {}".format(tools)) # ['pitchcoms', 'gloves', 'Bats', 'caps', 'Sun_glasses']

tools.sort()
print("tools (after being sorted) : {}".format(tools)) # ['Bats', 'Sun_glasses', 'caps', 'gloves', 'pitchcoms']
