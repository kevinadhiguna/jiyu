provider "google" {
  project = "gcp-mini-project"
  region  = "us-west1"
}

# -- Terraform Google Cloud Platform (GCP) Authentication --
# Instead of using a couple of access key and secret access key like in aws provider, GCP uses Google Cloud SDK to authenticate user.
# (1) Run : '$ gcloud auth application-default login'
# (2) Login into your Google Account in your browser
# ----------------------------------------------------------
