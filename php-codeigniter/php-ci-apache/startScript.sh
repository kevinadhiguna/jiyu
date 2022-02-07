#!/bin/bash

# Move current folder to '/var/www/html'
# mv . /var/www/html

# apache2ctl blocks the progress of your entrypoint script until apachectl exits. For more : https://stackoverflow.com/questions/49721591/docker-container-custom-index-html-on-startup.
/usr/sbin/apache2ctl -D FOREGROUND