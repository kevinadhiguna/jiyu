text = "bienvenido Mr. Smith, gracias!"

# returns index instead of boolean
print("text.find('gracias') :", text.find('gracias')) # 22

print("text.find('gracias', 1, 14) :", text.find('gracias', 1, 14)) # -1

print("text.find('gracias', 11, 28) :", text.find('gracias', 11, 28)) # -1
print("text.find('gracias', 11, 29) :", text.find('gracias', 11, 29)) # 22

# quite similar with .find() but raises an exception if the word is not found
print("text.index('bienvenido') :", text.index('bienvenido')) # 0

# difference:
print("text.find('bienvenue') :", text.find('bienvenue')) # -1

print("text.index('bienvenue') :", text.index('bienvenue')) 
# Traceback (most recent call last):
#   File "<PATH>\<TO>\<FILE>\find-word-in-string.py", line 11, in <module>
#     print("text.index('bienvenue') :", text.index('bienvenue')) # 
# ValueError: substring not found 
