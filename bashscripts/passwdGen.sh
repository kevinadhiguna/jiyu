#!/bin/bash

# Simple Password Generator

echo "== This is a simple password generator =="

echo "Please enter the length of the password: "
read PASS_LENGTH

# 'seq 1 5' means generating 5 passwords
for P in $(seq 1 5);
do
	# Utilizing openssl to generate a random password
	openssl rand -base64 48 | cut -c1-$PASS_LENGTH
done
