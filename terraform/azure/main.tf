# Create a resource group
resource "azurerm_resource_group" "rg" {
  name     = "my-terraform-resource-group"
  location = "westus2"
}
