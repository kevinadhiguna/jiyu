resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "f1.micro"
  tags         = ["web", "dev"]

  boot_disk {
    initialize_params {
      # image = "debian-cloud/debian9"
      image = "cos-cloud/cos-stable" # <- Change Debian 9 image to Google's Container-Optimized OS (DESTRUCTIVE CHANGE !).
      # Destructive Change: A destructive change is a change that requires the provider to replace the existing resource rather than updating it.
    }
  }

  network_interface {
    network = google_compute_network.vpc_network.name
    access_config {}
  }
}
