goals = 15
introduction = "My name is Mitoma, and I score {}" + " goals"

print(introduction.format(goals)) # My name is Mitoma, and I score 15 goals

club = "Brighton"
introduction2 = "I play for {}"

print(introduction2.format(club)) # I play for Brighton

fastest_speed = 37.93
years = 3
title = "UCL"
desire = "My fastest speed is {} km/h and I want to win {} in {} years"

print(desire.format(fastest_speed, title, years))
# My fastest speed is 37.93 km/h and I want to win UCL in 3 years

wc_goals = 7
wc_assists = 5
wc_year = 2026
# Make sure that arguments are place appropriately in correct placeholders:
target = "My another target is to score {2} goals and assist {0} times in upcoming World Cup {1}"

print(target.format(wc_assists, wc_year, wc_goals))
# My another target is to score 7 goals and assist 5 times in upcoming World Cup 2026
