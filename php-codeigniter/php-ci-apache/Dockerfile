# Reference : https://github.com/atsanna/codeigniter4-docker
FROM php:7.3-apache
# FROM XXXXXXXXXX.dkr.ecr.ap-southeast-1.amazonaws.com/php:7.3-apache

RUN apt-get update
RUN apt-get upgrade -y

# Install dependencies
RUN apt-get install --fix-missing -y libpq-dev
RUN apt-get install --no-install-recommends -y libpq-dev
RUN apt-get install -y libxml2-dev libbz2-dev zlib1g-dev
RUN apt-get -y install libsqlite3-dev libsqlite3-0 mariadb-client curl exif ftp
RUN docker-php-ext-install intl
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-enable mysqli
RUN docker-php-ext-enable pdo
RUN docker-php-ext-enable pdo_mysql
RUN apt-get -y install --fix-missing zip unzip
RUN apt-get -y install --fix-missing git

# Install aws
RUN apt-get -y install \
    python3 \
    python3-pip \
    && pip3 install --upgrade pip \
    && pip3 install \
    awscli \
    && rm -rf /var/cache/apt/*

RUN aws --version

# Add Apache configuration
ADD conf/apache.conf /etc/apache2/sites-available/000-default.conf

# Lightweight Active Directory (LDAP) INSTALLATION
RUN set -x \
    && apt-get update \
    && apt-get install -y libldap2-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ \
    && docker-php-ext-install ldap \
    && apt-get purge -y --auto-remove libldap2-dev

RUN a2enmod rewrite

# ADD startScript.sh /startScript.sh
# The printf command below creates the script /startScript.sh with the following 3 lines. 
# #!/bin/bash
# mv /codeigniter4 /var/www/html
# /usr/sbin/apache2ctl -D FOREGROUND
# RUN printf "#!/bin/bash\nmv . /var/www/html\n/usr/sbin/apache2ctl -D FOREGROUND" > /startScript.sh
RUN printf "#!/bin/bash\n/usr/sbin/apache2ctl -D FOREGROUND" > /startScript.sh
RUN chmod +x /startScript.sh

# RUN composer create-project codeigniter4/appstarter codeigniter4 v4.1.4
# COPY . /var/www/html/codeigniter3
# RUN chmod -R 0777 /var/www/html/codeigniter3/writable

# RUN mv codeigniter3 /
COPY --chown=www-data:www-data ./ ./

RUN cd /var/www/html

RUN apt-get clean \
    && rm -r /var/lib/apt/lists/*

EXPOSE 5000
VOLUME ["/var/www/html", "/var/log/apache2", "/etc/apache2"]

CMD ["bash", "/startScript.sh"]
