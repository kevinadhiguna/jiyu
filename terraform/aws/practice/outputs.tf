# "output" in Terraform is just like console.log in JavaScript
# The value is shown when executing :
#   1) $ terraform output
#   2) $ terraform refresh
#   3) $ terraform apply (not recommended if purpose is just to display the value)
output "subnet-1_cidr_block" {
  # Will display the value of cidr_block in aws_subnet.subnet-1 resource
  value = aws_subnet.subnet-1.cidr_block
}

# -- Invalid example of Output --
# (Error) Attribute redefined: The argument "value" was already set at main.tf:69,3-8. Each argument may be set only once.
# output "subnet-1_cidr_block" {
#   value = aws_subnet.subnet-1.cidr_block
#   value = aws_vpc.dev-vpc,cidr_block
# }

# -- Valid example of Output --
# output "subnet-1_cidr_block" {
#   value = aws_subnet.subnet-1.cidr_block
# }
# output "dev-vpc_cidr_block" {
#   value = aws_vpc.dev-vpc.cidr_block
# }
