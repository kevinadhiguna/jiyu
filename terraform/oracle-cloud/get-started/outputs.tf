output "vcn_state" {
  description = "The state of the OCI Virtual Cloud Network"
  value       = oci_core_vcn.internal.state
}

output "vcn_cidr" {
  description = "CIDR block of the core VCN"
  value       = oci_core_vcn.internal.cidr_blocks
}
