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
  credentials = file(credentials.json) # <- just an example

  # project = "<PROJECT_ID>"
  project = "Gd62jJSd" # <- just an example
  region  = "us-central1"
  zone    = "us-central1-c"
}
