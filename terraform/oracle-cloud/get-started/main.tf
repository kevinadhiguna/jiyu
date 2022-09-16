resource "oci_core_vcn" "internal" {
  dns_label  = "internal"
  cidr_block = "172.16.0.0/20"
  # compartment_id = "<Compartment_OCID>"
  compartment_id = "Oc6ddhw" # <- just an example
  display_name   = "oci-internal-vcn"
}
