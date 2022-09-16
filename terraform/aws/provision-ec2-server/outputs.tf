output "instance-id" {
  value = aws_instance.app-server.id
}

output "instance-public-ip" {
  value = aws_instance.app-server.public_ip
}
