import re

def is_phone_number_valid(phone_number):
    # pattern = re.compile('^(?:08|\+?628)\s?(?:\d\s?){6,12}') # Starts with '08' and ranging from 6 to 12 digits
    pattern = re.compile('^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$') # from https://stackoverflow.com/a/16702965
    return bool(pattern.match(phone_number))

contact = '085117311827'

if (is_phone_number_valid(contact)):
    print(f'{contact} is a valid phone number!')
else:
    print(f'{contact} is an invalid phone number, please check again')

# -------------------- #

contact_book = ['085117311827', '08121728192', '08152719291']

for phone_number in contact_book:
    if (is_phone_number_valid(phone_number)):
        print(f'{phone_number} is a valid phone number!')
    else:
        print(f'{phone_number} is an invalid phone number, please check again')
