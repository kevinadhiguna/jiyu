resource "aws_instance" "app-server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    "name" = "ec2-app-server"
  }
}
