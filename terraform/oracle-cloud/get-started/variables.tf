variable "compartment_id" {
  type        = string
  description = "Oracle Cloud Infrastructure compartment ID from your tenancy page"
}

variable "region" {
  type        = string
  description = "Oracle Cloud Infrastructure region"
  default     = "us-sanjose-1"
}
