resource "aws_instance" "app-server" {
  ami           = "ami-08d70e59c07c61a3a"
  instance_type = "t2.micro"

  tags = {
    "name" = "ec2-app-server"
  }
}
