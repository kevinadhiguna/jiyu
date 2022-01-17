# Use nginx:alpine (Nginx in Alpine OS) as base image 
FROM nginx:alpine

# Determine a working directory in which files will be copied to by default (in this Dockerfile)
WORKDIR /app

# Copy 'index.html' to '/app' (The path will be '/app/index.html')
COPY /app/static/index.html index.html

# Copy 'static-file.conf' (customized Nginx config) to '/etc/nginx/conf.d/' 
COPY nginx/static-file.conf /etc/nginx/conf.d/
