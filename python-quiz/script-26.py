
def outer_function(i, j):
    def inner_function(k, l):
        return k + l
    return inner_function(i, j)

display = outer_function(1, 5)
print("display:", display)

# Output:
# display: 6
