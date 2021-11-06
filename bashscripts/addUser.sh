#!/bin/bash

## Below is an alternative for:
# echo "Execution of script: "
# read $0

echo "Execution of script:$0"
echo "Please enter the username:$1"

# Adding a user
adduser --home /$1 $1
