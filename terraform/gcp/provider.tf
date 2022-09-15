provider "google" {
  project = "gcp-mini-project"
  region  = "us-west1"
}

# -- Terraform Google Cloud Platform (GCP) Authentication --
# Instead of using a couple of access key and secret access key like in aws provider, one can use :
#
# (1) Google Cloud SDK to authenticate user (normally used when a person is operating Terraform directly)
#     1. Run : '$ gcloud auth application-default login'
#     2. Login into your Google Account in your browser
#
# (2) Create a new key in GCP web and download it in JSON format (often used in CI/CD because of non-interactive session)
#     1. Manage keys -> Create a key -> Download it (Frequently saved in 'Downloads' directory [MacOS/Linux])
#     2. Put the KEY PATH to credentials property in google provider OR put the CONTENT OF THE KEY
#
# ----------------------------------------------------------
