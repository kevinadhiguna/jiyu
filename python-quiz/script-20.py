lst_1 = [1, 2, 3, 4]
lst_2 = [5, 6, 7, 8]
lst_3 = list()

lst_3.extend(i for i in lst_1 if i not in (lst_2 + [2, 8]) and i not in [2, 6, 7, 8])
print("lst_3 :", lst_3) # [1, 3, 4]
