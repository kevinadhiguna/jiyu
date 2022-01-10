#########################
#   Rundeck Community   #
#########################

# Use Ubuntu as base image
FROM ubuntu:20.04

# Update OS
RUN apt-get update

# Install dependencies
RUN apt-get install -y openjdk-11-jre-headless \
    curl

# Quick install with apt
RUN curl https://raw.githubusercontent.com/rundeck/packaging/main/scripts/deb-setup.sh 2> /dev/null | bash -s rundeck

# Start Rundeck
RUN service rundeckd start

# Verify if Rundeck started corrently
RUN tail -f /var/log/rundeck/service.log

# Having started the service, you should see something similar to:
# "Grails application running at http://localhost:4440 in environment: production"

# If so, navigate to http://localhost:4440/ (opens new window) in a browser.
# Log in with the 
#   username : admin
#   password : admin
