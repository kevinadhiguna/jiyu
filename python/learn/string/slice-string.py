closers = "Clase, Diaz, Iglesias"

# guardian = closers[0:5] # same as closers[:5]
guardian = closers[:5] # Slice from the start

met = closers[7:11]

# brave = closers[13:21] # same as closers[13:]
brave = closers[13:] # Slice to the end

print("guardian : {}".format(guardian)) # Clase
print("met : {}".format(met)) # Diaz
print("brave : {}".format(brave)) # Iglesias

# -- Megative indexing --
starter = "DeGrom, Kershaw"

# ranger = starter[-15:-9] # same as starter[:-9]
ranger = starter[:-9]

dodger = starter[-7:]

print("ranger : {}".format(ranger)) # DeGrom
print("dodger : {}".format(dodger)) # Kershaw
