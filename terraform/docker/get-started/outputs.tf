output "container_id" {
  description = "Docker Container ID"
  value       = docker_container.nginx.id
}

output "image_id" {
  description = "Docker Image ID"
  value       = docker_image.nginx.id
}
