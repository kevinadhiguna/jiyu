provider "aws" {
  region     = "us-west-1"
  access_key = ""
  secret_key = ""
}

# == Resource declaration format ==
#resource "<PROVIDER>_<RESOURCE_TYPE>" "<NAME>" {
#  -- CONFIGURATION_OPTIONS --
#  <KEY> = <VALUE>
#  <RESOURCE_PROPERTY> = <VALUE_OF_RESOURCE_PROPERTY>
#}

# -- Commands --
# 1. Install Terraform plugins to be able to communicate with provider (e.g. : aws, etc.) in .terraform directory
#    $ terraform init
# 2. Create a Terraform config using Hashicorp config language
# 3. Reformat Terraform config
#    $ terraform fmt
# 4. Validate Terraform config
#    $ terraform validate
# 5. Dry-run Terraform config (optional, but recommended)
#    $ terraform plan
# 6. Apply Terraform config (will produce 'terraform.tfstate' and 'terraform.tfstate.lock.info' files)
#    $ terraform apply
#    Note : 
#    - "$ terraform apply" will ask you whether you want to apply it or not. If you want to avoid this, run :
#      "$ terragorm apply --auto-approve".
#    - "$ terraform apply -target <PROVIDER_INSTANCE-TYPE>.<NAME>" will only implement/target the resource mentioned. 
#      Example : "$ terraform apply -target aws_instance.ubuntu-server"
# 7. Destroy resources defined in Terraform config
#    $ terraform destroy
#    Note :
#    - "$ terraform destroy -target <PROVIDER_INSTANCE-TYPE>.<NAME>" will only destroy/target the resource mentioned.
#      Example : "$ terraform destroy -target aws_instance.ubuntu-server"
# --------------

resource "aws_instance" "ubuntu-server" {
  ami           = ""
  instance_type = "t2.micro"
  tag = {
    Name = "ubuntu-server-dev"
    # Version = "22.04.1"
  }
}

# -- Note regarding resource declaration --
# The "aws_subnet.subnet-1" resource uses the ID of "aws_vpc.dev-vpc" resource
#  However, that does not mean "aws_vpc.dev-vpc" resource must be declared before "aws_subnet.subnet-1" resource
#   In a nutshell, resource declaration order does not matter and does not have to be in order

resource "aws_vpc" "dev-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "Name" = "development"
  }
}

resource "aws_subnet" "subnet-1" {
  vpc_id     = aws_vpc.dev_vpc.id # <- Refer vpc_id to aws_vpc.dev_vpc.id
  cidr_block = "10.0.0.0/24"
  tags = {
    Name = "dev-subnet"
  }
}
