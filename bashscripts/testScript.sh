#!/bin/bash

# Check if a directory exists
if [ -d /home/user/bashscript ];
then
	echo "Yes the directory exists!"
else
	echo "This directory does not exists..."
fi

# Check if a file exists in a directory
if [ -e /home/user/bashscript/helloworld.sh ];
then
	echo "Yes the file exists!"
else
	echo "The file does not exist..."
fi

# Check if a file is readable
if [ -f /home/user/bashscript/helloworld.sh ];
then
	echo "Yes the file is readable!"
else
	echo "The file is unreadable.."
fi
