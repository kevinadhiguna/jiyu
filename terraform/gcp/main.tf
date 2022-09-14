provider "google" {
  project = "gcp-mini-project"
  region  = "us-west1"
}

# -- Terraform Google Cloud Platform (GCP) Authentication --
# Instead of using a couple of access key and secret access key like in aws provider, GCP uses Google Cloud SDK to authenticate user.
# (1) Run : '$ gcloud auth application-default login'
# (2) Login into your Google Account in your browser
# ----------------------------------------------------------

resource "google_compute_network" "development_network" {
  name                    = "development-network"
  auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "dev_subnet_01" {
  name          = "dev-subnet-01"
  ip_cidr_range = "10.100.0.0/16" # Usable Host IP range : 10.100.0.1 - 10.100.255.254 (more: https://www.calculator.net/ip-subnet-calculator.html)
  network       = google_compute_network.development_network.id
  region        = "us-west1"
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
