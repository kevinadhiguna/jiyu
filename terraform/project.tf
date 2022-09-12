provider "aws" {
  region     = ""
  access_key = ""
  secret_key = ""
}

# -- Variable --
# The actual values can be stored in a separate file named terraform.tfvars.
#   Otherwise, pass an argument to tell Terraform the env vars filename.
#     Example   : "$ terraform apply -var-file <envvars-filename>"
#     Example 2 : For 'example.tfvars', run "$ terraform apply -var-file example.tfvars" 
variable "prod-vpc-cidr-block" {
  description = "prod-vpc cidr_block"
  type        = string # <- To avoid input like ["10.0.0.0/16"] instead of 10.0.0.0/16. Useful when working on large codebase.
}

# 1) Create VPC

# 2) Create internet gateway

# 3) Create custom route table

# 4) Create a subnet

# 5) Associate subnet with route table

# 6) Create security group to allow port 22, 80, 443

# 7) Create a network interface with an IP in the subnet that was created in step 4

# 8) Assign an elastic IP to the network interface created in step 7

# 9) Create Ubuntu server and install/enable Apache2
