import hashlib
import getpass

password_manager = {}

def create_account():
    username = input("Create your username: ")
    password = getpass.getpass("Create your password: ")
    # To-do: Reenter the password then if passwords do not match, start over the process
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    password_manager[username] = hashed_password
    print("Account created successfully!")



# Reference: https://youtu.be/tbhYxd2sfAE
