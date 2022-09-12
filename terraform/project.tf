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

variable "subnet-values" {
  description = "Values of subnet properties"
}

# 1) Create VPC
resource "aws_vpc" "prod-vpc" {
  # cidr_block = "10.0.0.0/16" # <- not using Variable
  cidr_block = var.prod-vpc-cidr-block # <- using Variable

  tags = {
    Name = "production"
  }
}

# 2) Create internet gateway
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.prod-vpc.id
}

# 3) Create custom route table
resource "aws_route_table" "prod-route-table" {
  vpc_id = aws_vpc.prod-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.gw.id
  }

  tags = {
    "Name" = "Prod"
  }
}

# 4) Create a subnet
# resource "aws_subnet" "subnet-2" {
#   vpc_id            = aws_vpc.prod-vpc.id
#   cidr_block        = "10.0.1.0/24"
#   availability_zone = "us-west-1a"

#   tags = {
#     Name = "prod-subnet"
#   }
# }

resource "aws_subnet" "subnet-2" {
  vpc_id            = aws_vpc.prod-vpc.id
  cidr_block        = var.subnet-values[0].cidr_block
  availability_zone = var.subnet-values[0].availability_zone

  tags = {
    Name = var.subnet-values[0].tags
  }
}

# 5) Associate subnet with route table

# 6) Create security group to allow port 22, 80, 443

# 7) Create a network interface with an IP in the subnet that was created in step 4

# 8) Assign an elastic IP to the network interface created in step 7

# 9) Create Ubuntu server and install/enable Apache2
