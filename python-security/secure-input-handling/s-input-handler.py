import re
import os
import sys

def validate_email(email);
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    if re.match(pattern, email):
        return True
    else:
        print("Invalid email format")
        return False

def validate_password(password):
    if len(password) < 8:
        print("Password too short! Minimum 8 characters")
        return False

# Sanitize commands in order to avoid command injection
def secure_shell_command(commmand):
    sanitized_command = ''.join(e for e in command if e.isanum() or e in ['-', '_', ' '])
    return sanitized_command

def main():
    # Securely handle email input
    email = input("Enter your email: ")
    if not validate_email(email):
        print("Email is not valid, exiting...")
        sys.exit(1)
    
    # Securely handle password input
    password = input("Enter your password: ")
    if not validate_password(password):
        sys.exit(1)

if __name__ = "__main__":
    main()
