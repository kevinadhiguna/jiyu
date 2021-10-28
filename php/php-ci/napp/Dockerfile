# Personal Experience : Failed due to denied permission
FROM ubuntu:18.04

ENV DEBIAN_FRONTEND=noninteractive

COPY build /build

RUN apt-get update \
    && apt-get install -yq --no-install-recommends \
    apt-utils \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    && LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php \
    && apt-get remove --purge -y software-properties-common \
    && /build/cleanup.sh

RUN apt-get update \
    && apt-get install -yq --no-install-recommends \
    php7.3 \
    php7.3-fpm \
    php7.3-bcmath \
    php7.3-bz2 \
    php7.3-curl \
    php7.3-exif \
    php7.3-iconv \
    php7.3-imap \
    php7.3-intl \
    php7.3-ldap \
    php7.3-mbstring \
    php7.3-pdo \
    php7.3-pdo-mysql \
    php7.3-pdo-pgsql \
    php7.3-sqlite3 \
    php7.3-json \
    php7.3-phar \
    php7.3-dom \
    php7.3-gd \
    php7.3-ctype \
    php7.3-zip \
    php7.3-soap \
    php7.3-xdebug \
    php7.3-imagick \
    git \
    mysql-client \
    graphicsmagick \
    imagemagick \
    ghostscript \
    unzip \
    make \
    && /build/cleanup.sh

RUN apt-get update
RUN apt-get install -y php-pear php7.3-dev

RUN pecl install redis
RUN apt-get install -y php-redis

RUN mkdir -p /run/php && chown www-data:www-data /run/php

COPY container /

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 9000
CMD ["php-fpm7.3"]
