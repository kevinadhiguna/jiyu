# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = "my-terraform-resource-group"
  location = "westus2"

  tags = {
    Environment = "Terraform Azure"
    Team        = "DevOps"
  }
}

# Create a virtual network
resource "azurerm_virtual_network" "vnet" {
  name                = "my-terraform-resource-group-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = "westus2"
  resource_group_name = azurerm_resource_group.rg
}
