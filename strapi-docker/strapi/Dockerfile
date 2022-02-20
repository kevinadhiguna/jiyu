### --- ORIGINAL (determining base image) --- ###
# ARG BASE_VERSION
# FROM strapi/base:${BASE_VERSION}

# ARG STRAPI_VERSION
### ---------------- ###

### --- MODIFIED (determining base image) --- ###
# Having built Strapi base image, replace "kevinadhiguna" with your DockerHub username.
ARG ACCOUNT="kevinadhiguna"
ARG BASE_VERSION="16"
ARG STRAPI_VERSION="4.0.7"

FROM ${ACCOUNT}/base:${BASE_VERSION}
### ---------------- ###

RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

VOLUME /srv/app

### --- ORIGINAL (docker-entrypoint.sh placement) --- ###
# COPY strapi/docker-entrypoint.sh /usr/local/bin/
### ---------------- ###

### --- MODIFIED (docker-entrypoint.sh placement) --- ###
COPY docker-entrypoint.sh /usr/local/bin/
### ---------------- ###

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["strapi", "develop"]
