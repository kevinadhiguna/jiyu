output "instance-id" {
  value = aws_instance.app-server.id
}

output "instance-public-ip" {
  value = aws_instance.app-server.public_ip
}

output "instance-public-dns" {
  value = aws_instance.app-server.public_dns
}
