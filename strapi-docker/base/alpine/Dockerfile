### Notes ###
# 
# VALID     : ARG NODE_VERSION="16-alpine"
# INVALID   : ARG NODE_VERSION=16-alpine (Will give an error saying "invalid reference format")
#

ARG NODE_VERSION="16-alpine"
FROM node:${NODE_VERSION}

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

EXPOSE 1337