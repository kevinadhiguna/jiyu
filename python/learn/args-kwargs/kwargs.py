def total_countries(**kwargs):
    print("kwargs :", kwargs)
    print("type(kwargs) :", type(kwargs))
    # =================================== #
    total = 0
    for kwarg in kwargs.values():
        total += kwarg
    return total

print("Total Countries :", total_countries(europe=7, asia=7, oceania=2))
# kwargs : {'europe': 7, 'asia': 7, 'oceania': 2}
# type(kwargs) : <class 'dict'>
# Total Countries : 16

print("\n")
print("Total Countries :", total_countries(europe=7, asia=7, africa=11, oceania=2))
# kwargs : {'europe': 7, 'asia': 7, 'africa': 11, 'oceania': 2}
# type(kwargs) : <class 'dict'>
# Total Countries : 27

print("\n")
print("Total Countries :", total_countries(america=3, europe=7, asia=7, oceania=2))
# kwargs : {'america': 3, 'europe': 7, 'asia': 7, 'oceania': 2}
# type(kwargs) : <class 'dict'>
# Total Countries : 19
