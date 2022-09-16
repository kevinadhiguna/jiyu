resource "oci_core_vcn" "internal" {
  dns_label  = "internal"
  cidr_block = "172.16.0.0/20"
  # compartment_id = "<Compartment_OCID>"
  compartment_id = "Oc6ddhw" # <- just an example
  display_name   = "oci-internal-vcn"
}

resource "oci_core_subnet" "dev" {
  vcn_id     = oci_core_vcn.internal.id
  cidr_block = "172.16.0.0/24"
  # compartment_id = "<Compartment_OCID>"
  compartment_id             = "Oc6ddhw" # <- just an example
  display_name               = "dev-subnet-1"
  prohibit_public_ip_on_vnic = true
  dns_label                  = "dev"
}
