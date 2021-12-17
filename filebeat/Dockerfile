FROM ubuntu:20.04

ENV TERM xterm
ENV TZ=Asia/Dubai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#Install filebeat for logging
# RUN wget https://artifacts.elastic.co/GPG-KEY-elasticsearch 
# RUN apt-key add GPG-KEY-elasticsearch

RUN apt-get update
RUN apt-get install -y \
    htop \
    curl \
    wget \
    nano \
    net-tools \
    iotop \
    supervisor \
    logrotate \
    apache2 \
    gnupg2
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN apt-get install apt-transport-https
RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt-get update
RUN apt-get install filebeat
# RUN systemctl enable filebeat
ADD ./filebeat.yml /etc/filebeat/filebeat.yml
RUN chmod go-w /etc/filebeat/filebeat.yml

RUN filebeat --help
