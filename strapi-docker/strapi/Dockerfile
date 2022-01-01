### --- ORIGINAL --- ###
# ARG BASE_VERSION
# FROM strapi/base:${BASE_VERSION}

# ARG STRAPI_VERSION
# RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

### ---------------- ###

### --- MODIFIED --- ###
ARG ACCOUNT="kaidoe"
ARG BASE_VERSION="16"
ARG STRAPI_VERSION="4.0.2"

FROM ${ACCOUNT}/base:${BASE_VERSION}
### ---------------- ###

RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

VOLUME /srv/app

### ORIGINAL ###
# COPY strapi/docker-entrypoint.sh /usr/local/bin/

### MODIFIED ###
COPY docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["strapi", "develop"]