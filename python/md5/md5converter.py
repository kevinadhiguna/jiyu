import os
import hashlib
import sys

# Feel free to edit the file paths and names
input_file = os.path.expanduser("~/Desktop/setup/top-usernames-shortlist.txt")
output_file = os.path.expanduser("~/Desktop/setup/md5hashed_usernames.txt")

if not os.path.isfile(input_file):
    print("Input file not found:", input_file)
    sys.exit(1)

with open(input_file, "r", encoding="utf-8", errors="ignore") as infile, \
     open(output_file, "w", encoding="utf-8") as outfile:
    for line in infile:
        username = line.strip().rstrip("\r")   # remove newline, spaces and CR
        if not username:
            continue
        md5_hash = hashlib.md5(username.encode()).hexdigest()
        outfile.write(f"{md5_hash}\n")

print("Wrote hashes to", output_file)
