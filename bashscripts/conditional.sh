#!/bin/bash

NAME="Marc"

# Put space after a variable's name
if [ "$NAME" = "Marc" ];
then
	echo "Welcome Marc!"
fi

# -- #
echo "Please enter your username: "
read UNAME

if [ "$UNAME" = "Jack" ];
then
	echo "Welcome back Jack!"
else
	echo "Invalid username, please register!"
fi
