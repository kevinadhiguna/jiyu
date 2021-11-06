#!/bin/bash

# '-p' is prompt
read -p "Enter your nickname: " NNAME
echo "Your name is $NNAME"

# --- #
echo "Please enter your full name: "
read FNAME LNAME
echo "Your name is $FNAME $LNAME"

# --- #
echo "Please enter your username and password: "
read UNAME PWD
echo "Hi $UNAME, you successfully logged in with $PWD"
