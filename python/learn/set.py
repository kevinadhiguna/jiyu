sections = {"listening", "reading", "writing", "speaking"}

print("IELTS sections : {}".format(sections)) # {'writing', 'speaking', 'listening', 'reading'}
print("Type of {}".format(sections), " : {}".format(type(sections))) # <class 'set'>

# ---------------------------------------------------------------------------------------------------

# Copies or duplicates are DISALLOWED within a set 
techniques = {"skimming", "scanning", "guessing", "focus", "skimming", "underlining"}

print("IELTS techniques : {}".format(techniques)) # {'focus', 'guessing', 'skimming', 'underlining', 'scanning'}
# Notice 'skimming' does not appear more than once, above

print("Type of {}".format(techniques), " : {}".format(type(techniques))) # <class 'set'>

# True and 1 are considered a duplicate
vars = {1, True, "hello"}
print("vars : {}".format(vars)) # {'hello', 1}
