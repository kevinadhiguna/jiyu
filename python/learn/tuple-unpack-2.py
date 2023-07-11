scotlandBigFive = ("celtic", "rangers", "aberdeen", "hearts", "dundee")

# the asterisk functions such as a spread operator in JavaScript 
(greenTeam, blueTeam, *theRest) = scotlandBigFive

print("greenTeam : {}".format(greenTeam)) # celtic
print("blueTeam : {}".format(blueTeam))   # rangers
print("theRest : {}".format(theRest))     # ['aberdeen', 'hearts', 'dundee']
