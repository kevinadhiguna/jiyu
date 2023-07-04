# --- Sort a list alphanumerically (descending) ---

first_basemen = ["Freddie Freeman", "Matt Olson", "Vladimir Guerrero Jr.", "Jared Walsh", "Pete Alonso"]
first_basemen.sort(reverse = True)

print("First Basemen (sorted) : {}".format(first_basemen))
# ['Vladimir Guerrero Jr.', 'Pete Alonso', 'Matt Olson', 'Jared Walsh', 'Freddie Freeman']

first_basemen_homers = [31, 32, 27, 35, 37]
first_basemen_homers.sort(reverse = True)

print("Homers by First Basemen (sorted) : {}".format(first_basemen_homers))
# [37, 35, 32, 31, 27]
