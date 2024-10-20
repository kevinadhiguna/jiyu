resource "google_compute_network" "development_network" {
  # name                    = "development-network"
  name                    = var.network-name
  auto_create_subnetworks = false
  # credentials             = "/Users/johndoe/Downloads/johndoe-g45HSSWJDf.json" # <- Sensitive info, usually not shown (use env vars instead)
  # Run this before executing : 
  # '$ export TF_VAR_google_credentials=/Users/johndoe/Downloads/johndoe-g45HSSWJDf.json' [KEY PATH]
  #   OR
  # '$ export TF_VAR_google_credentials=$(cat /Users/johndoe/Downloads/johndoe-g45HSSWJDf.json)' [CONTENT OF THE KEY]
  credentials = var.google_credentials
}

resource "google_compute_subnetwork" "dev_subnet_01" {
  # name = "dev-subnet-01"
  name = var.subnet_01_name
  # ip_cidr_range = "10.100.0.0/16" # <- Usable Host IP range : 10.100.0.1 - 10.100.255.254 (more: https://www.calculator.net/ip-subnet-calculator.html)
  ip_cidr_range = var.subnet_ip_cidr_range
  network       = google_compute_network.development_network.id
  region        = "us-west1"
  secondary_ip_range = [{
    # ip_cidr_range = "192.168.10.0/24"
    ip_cidr_range = var.subnet_secondary_ip_cidr_range
    range_name    = "secondary-range-01"
  }]
}

# Get an already existing Google Cloud Platform VPC ID
data "google_compute_network" "existing_default_network" {
  name = "default" # The name of default GCP VPC is 'default'
}

resource "google_compute_subnetwork" "dev_subnet_02" {
  name          = "dev-subnet-02"
  ip_cidr_range = "10.110.0.0/16"
  network       = data.google_compute_network.existing_default_network.id
  region        = "us-west1"
}
