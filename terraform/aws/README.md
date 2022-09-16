# Terraform

[Terraform](https://www.terraform.io/intro) config examples

<br />

## Before running :

Copy `credentials.example.sh` and create a new file named `credentials.sh` :
```
cp credentials.example.sh credentials.sh
```

Fill in your AWS Access Key ID and AWS Secret Access Key, then execute `credentials.sh` to import them into system :
```
sh credentials.sh
```

<br />

## Notes/To-do :

- Create a terraform.tfvars file then assign variable values into it ('*.tfvars' files are ignored, see .gitignore)
- Find a way to name an example file of terraform.tfvars, just like .env and .env.example in Node.js
- Separate variable declaration in a file named variable.tf file

<br />

## Reference

- [Terraform Course - Automate your AWS cloud infrastructure by FreeCodeCamp](https://youtu.be/SLB_c_ayRMo)
