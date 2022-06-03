# A simple diagram that illustrates the flow request in a website

from diagrams import Diagram

from diagrams.saas.cdn import Cloudflare
from diagrams.aws.compute import EC2
from diagrams.aws.compute import ECS
from diagrams.aws.database import RDS

with Diagram("Request Flow", show=True):
  Cloudflare("Cloudflare") >> EC2("Nginx Load Balancer") >> ECS("Web Server") >> RDS("Database")
