import os

# Set path to current working directory
path = os.getcwd()

for i in range(1, 1001):
    # Create folders/directories
    os.mkdir(path + f"\\{i}")
