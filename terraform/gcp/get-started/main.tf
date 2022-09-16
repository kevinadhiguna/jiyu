resource "google_compute_network" "vpc_network" {
  name = "terraform-network"
}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "f1.micro"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian9"
    }
  }
}
