# Personal Experience : Failed using php:7.3.0-fpm
FROM php:5.6.38-apache

RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql
RUN a2enmod rewrite

COPY myweb /var/www/html/myweb
