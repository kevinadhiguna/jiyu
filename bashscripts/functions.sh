#!/bin/bash

### == How to write a function : ==
# 1):
#function function_name(){
	# Code here
#}

# 2):
#function_name() {
	# Code
#}

### ==== ###

function test_shadow(){
if [ -e /etc/shadow ];
then
	echo -e "It exists! \nHere is the files : "
	ls -al # <- to see all files in the directory
else
	echo "The file does not exist..."
fi
test_passwd # <- How to call a function inside another function
}

function test_passwd(){
if [ -e /etc/passwd ];
then
	echo "Yes it exists!"
else
	echo "The file does not exist..."
fi
}

test_shadow
# test_passwd # <- 'test_passwd' can be called here too
