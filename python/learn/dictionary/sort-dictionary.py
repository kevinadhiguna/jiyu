# To-do: Sort a dictionary with multiple same keys

players = {
    'pxg': 'rin',
    'baricade munchen': 'isagi',
    'fc barcha': 'bachira',
    'baricade munchen': 'kaiser',
    'manshine city': 'nagi',
}

print(f'Original: {players}\n')
# Output: {'pxg': 'rin', 'baricade munchen': 'kaiser', 'fc barcha': 'bachira', 'manshine city': 'nagi'}

def sort_dictionary(dict):
    keys = list(dict.keys())
    keys.sort()
    sorted_dict = {i: dict[i] for i in keys}
    
    return sorted_dict

print(f'Sorted dictionary (customized method): {sort_dictionary(players)}\n')
# Output: {'baricade munchen': 'kaiser', 'fc barcha': 'bachira', 'manshine city': 'nagi', 'pxg': 'rin'}

print(f'Sorted dictionary (built-in method): {dict(sorted(players.items()))}')
# Output: {'baricade munchen': 'kaiser', 'fc barcha': 'bachira', 'manshine city': 'nagi', 'pxg': 'rin'}
