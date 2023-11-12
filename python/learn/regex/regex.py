import re

host = "The FIFA World Cup 2034 host is Saudi Arabia"

isSaudiHost = re.search("Saudi", host)
isPortugalHost = re.search("Portugal", host)

print("Result (if Saudi Arabia is the host) :", isSaudiHost) 
# Output:
# <re.Match object; span=(32, 37), match='Saudi'>

print("Result (if Portugal is the host) :", isPortugalHost)
# Output:
# None
