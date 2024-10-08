# 1) Create VPC
resource "aws_vpc" "prod-vpc" {
  # cidr_block = "10.0.0.0/16" # <- not using Variable
  cidr_block = var.prod-vpc-cidr-block # <- using Variable

  tags = {
    Name = "production"
  }
}

# 2) Create internet gateway
resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.prod-vpc.id
}

# 3) Create custom route table
resource "aws_route_table" "prod-route-table" {
  vpc_id = aws_vpc.prod-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.gw.id
  }

  tags = {
    "Name" = "Prod"
  }
}

# 4) Create a subnet
# resource "aws_subnet" "subnet-2" {
#   vpc_id            = aws_vpc.prod-vpc.id
#   cidr_block        = "10.0.1.0/24"
#   availability_zone = "us-west-1a"

#   tags = {
#     Name = "prod-subnet"
#   }
# }

resource "aws_subnet" "subnet-2" {
  vpc_id            = aws_vpc.prod-vpc.id
  cidr_block        = var.subnet-values[0].cidr_block
  availability_zone = var.subnet-values[0].availability_zone

  tags = {
    Name = var.subnet-values[0].tags
  }
}

# subnet-3 is created only to demonstrate Variable usage
resource "aws_subnet" "subnet-3" {
  vpc_id            = aws_vpc.prod-vpc.id
  cidr_block        = var.subnet-values[1].cidr_block
  availability_zone = var.subnet-values[1].availability_zone

  tags = {
    Name = var.subnet-values[1].tags
  }
}

# 5) Associate subnet with route table
resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.subnet-2.id
  route_table_id = aws_route_table.prod-route-table.id
}

# 6) Create security group to allow port 22, 80, 443
resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow web inbound traffic"
  vpc_id      = aws_vpc.prod-vpc.id

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Name = "allow_web"
  }
}

# 7) Create a network interface with an IP in the subnet that was created in step 4
resource "aws_network_interface" "web-server-nic" {
  subnet_id       = aws_subnet.subnet-2.id
  private_ips     = ["10.0.1.50"]
  security_groups = [aws_security_group.allow_web.id]
}

# 8) Assign an elastic IP to the network interface created in step 7
resource "aws_eip" "one" {
  vpc                       = true
  network_interface         = aws_network_interface.web-server-nic.id
  associate_with_private_ip = "10.0.1.50"
  depends_on                = [aws_internet_gateway.gw] # <- Refer to the whole object, not just ID
}

# 9) Create Ubuntu server and install/enable Apache2
resource "aws_instance" "web-server-instance" {
  ami           = "" # TO-DO : copy AMI from AWS Management Console
  instance_type = "t2.micro"
  # Everytime the documentation asks to set availability zone, make sure to set it
  availability_zone = "us-west-1a" # <- Set to the same availability zone as the subnet (in this case, 'aws_subnet.subnet-2')
  key_name          = ""           # TO-DO : assign your keypair name generated in AWS when configuring the AWS EC2 instance

  network_interface {
    device_index         = 0
    network_interface_id = aws_network_interface.web-server-nic.id
  }

  # Assign commands to install apache2 in the AWS EC2 instance
  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install apache2 -y
              sudo systemctl start apache2
              sudo bash -c "echo your very first web server > /var/www/html/index.html"
              EOF

  tags {
    Name = "web-server"
  }
}
