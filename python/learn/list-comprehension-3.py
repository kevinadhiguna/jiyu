players = ["Ward", "Paredes", "Eflin", "Machado", "De La Cruz"]

field_players = [player for player in players if player != "Eflin"]
# Note: Eflin is a starting pitcher

print("field players : {}".format(field_players)) # ['Ward', 'Paredes', 'Machado', 'De La Cruz']
