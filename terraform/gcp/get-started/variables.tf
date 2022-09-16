variable "project" {
  description = "Google Cloud Platform project ID"
}

variable "credentials_file" {
  description = "Credential filename in JSON format"
}

variable "region" {
  description = "Google Cloud Platform region"
  default     = "us-central1"
}

variable "zone" {
  description = "Google Cloud Platform availability zone"
  default     = "us-central1-c"
}
