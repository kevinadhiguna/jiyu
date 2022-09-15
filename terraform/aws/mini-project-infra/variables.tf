# -- Variables --
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
  type = list(object({
    cidr_block        = string
    availability_zone = string
    tags              = string
  }))
}
