food = ["pizza", "nachos", "fishAndChips"]

# -- Syntax --
# <new_list_variable> = [expression for item in iterable if condition == True]
#
# 'if condition == True' is optional
# ------------

culinary = [i for i in food]
print("culinary : {}".format(culinary)) # ['pizza', 'nachos', 'fishAndChips']
