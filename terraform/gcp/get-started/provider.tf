terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  # credentials = file(<CREDENTIAL_FILENAME>.json)
  # credentials = file(credentials.json) # <- just an example
  credentials = file(var.credentials_file)

  # project = "<PROJECT_ID>"
  # project = "Gd62jJSd" # <- just an example
  project = var.project
  region  = var.region
  zone    = var.zone
}
