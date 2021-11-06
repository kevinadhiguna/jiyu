#!/bin/bash

echo "== FILE ENCRYPTOR/DECRYPTOR =="

echo "Please choose what do you want to do: "
CHOICE="Encrypt Decrypt"

select option in $CHOICE; do
	if [ $REPLY = 1 ];
	then
		echo "--  Encryption --"
		echo "Please enter the file name: "
		read FILE;
		gpg -c $FILE
		# rm -r $FILE # <- If you want to remove the original file
		echo "Your file has been encrypted!"
	else
		echo "-- Decryption --"
		echo "Please enter the file name: "
		read FILE2;
		gpg -d $FILE2
		echo "The file has been decrypted!"
	fi
done
