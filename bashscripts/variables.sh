#!/bin/bash

### Variables' Rules in Bashscript :
### 1) Naming a variable's name in uppercase, entirely.
### 2) No space after initializing a variable's name.
### 3) Assign $ before calling a variable and put the variable's name inside the parenthesis.

NAME="Marc"
SPORTS="Foot"

# Calling a variable
echo "My name is $NAME"

# Concatenating a variable with string
echo "My favorite sports is ${SPORTS}ball"

### This is another good practice of naming a variable
STUDENT_01="John"
