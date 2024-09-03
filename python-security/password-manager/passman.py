import hashlib
import getpass

password_manager = {}

def create_account():
    username = input("Create your username: ")
    # Prompt user password without echoing
    password = getpass.getpass("Create your password: ")
    # To-do: Reenter the password then if passwords do not match, start over the process
    
    # 'password.encode()' converts strings into bytes
    # 'hashlib.sha256()' applies SHA-256 algorithm to the hashlib
    # 'hexdigest()' converts the resulting hash value into a hexadecimal string
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    
    # Store the hashed password as a value to username (as the key in an object)
    password_manager[username] = hashed_password
    print("Account created successfully!")

def login():
    username = input("Input your username: ")
    password = getpass.getpass("Enter your password: ")
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    if username in password_manager.keys() and password_manager[username] == hashed_password:
        print("login succesful!")
    else:
        print("Invalid username or password")

# Reference: https://youtu.be/tbhYxd2sfAE
