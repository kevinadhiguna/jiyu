import hashlib
import os

def calculate_file_hash(filename):
    # Calculate MD5 hash of a file
    md5_hash = hashlib.md5()
    try:
        with open(filename, "rb") as f:
            # Read file in chuncks for efficiency
            for chunck in iter(lambda: f.read(4096), b""):
                md5_hash.update(chunck)
        return md5_hash.hexdigest()
    except FileNotFoundError:
        print(f"File {filename} not found.")
        return None

def check_integrity(filename, original_hash):
    current_hash = calculate_file_hash(filename)
    if current_hash and current_hash == original_hash:
        print(f"File {filename} is unchanged (hash: {current_hash}).")
    elif current_hash:
        print(f"File {filename} has been modified! Current hash: {current_hash}")

if __name__ == "__main__":
    filename = input("Enter filename to check (e.g., text.txt): ")

    # Simulate storing original hash (in practice/realworld, store securely)
    print("Calculating original hash...")
    original_hash = calculate_file_hash(filename)
    if original_hash:
        print(f"Original hash: {original_hash}")

        # Simulate checking later
        input("Press 'Enter' to check file integrity...")
        check_integrity(filename, original_hash)
