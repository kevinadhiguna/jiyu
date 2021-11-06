#!/bin/bash

# Simple PingSweep Script
echo "Please enter the subnet: "
read SUBNET

# Declaring a variable in a loop does not require UPPERCASE!
for IP in $(seq 1 254); do
	ping -c 1 $SUBNET.$IP
done
