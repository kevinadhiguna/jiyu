variable "google_credentials" {
  description = "GCP service account credentials"
}

variable "subnet_ip_cidr_range" {
  description = "Subnet for DEV environment"
  default     = "10.50.0.0/16"
  type        = string
}

variable "subnet_secondary_ip_cidr_range" {
  description = "Secondary IP range for DEV environment"
  default     = "10.100.9.0/24"
  type        = string
}

variable "network-name" {
  description = "Network name"
  default     = "dev-network"
  type        = string
}

variable "subnet_01_name" {
  description = "Subnet 01 name"
  default     = "development-subnet-01"
  type        = string
}

# -- 3 ways to input variable value to Terraform --
# (1) '$ terraform apply' -> Hit enter -> Terraform will ask you the value of variable (interactive session)
# (2) '$ terraform apply -var subnet_ip_cidr_range=10.120.0.0/16'
# (3) [BEST practice] Fill variable values in terraform.tfvars file. The filename should be 'terraform.tfvars', otherwise
#       you should run it with an argument : '$ terraform apply -var-file <filename>' such as '$ terraform apply -var-file terraform-dev.tfvars'
# -------------------------------------------------
