import re

def is_username_valid(username):
    # pattern = re.compile('^[a-z0-9]{5,20}$') # Only small letters, and numbers ranging from 5 to 20 digits
    pattern = re.compile('^[a-zA-Z0-9]{5,20}$') # Only small letters, capital letters, and numbers ranging from 5 to 20 digits
    return bool(pattern.match(username))

username = 'nakamura17'

if (is_username_valid(username)):
    print(f'{username} is a valid username!')
else:
    print(f'{username} is an invalid username, please check again')
