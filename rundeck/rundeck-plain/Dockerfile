# Use Ubuntu as base image
FROM ubuntu:20.04

# Update OS
RUN apt-get update

# Install dependencies
RUN apt-get install -y openjdk-11-jre-headless \
    curl

# Quick install with apt
RUN curl https://raw.githubusercontent.com/rundeck/packaging/main/scripts/deb-setup.sh 2> /dev/null | bash -s rundeck
