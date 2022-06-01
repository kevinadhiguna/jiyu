#!bin/bash

# ------------------------------
# A script to push docker images
# ------------------------------

TAG_REVISION=$1
REGISTRY=""
BUILD_NAME="strapi-v4-dockerize"

# Either 'dev' or 'prod'
EXECUTION_ENVIRONMENT=dev

# Generate a random string that will be appended
RANDOM_STRING=$(</dev/urandom tr -dc 'A-Za-z0-9' | head -c10)

# Login to Docker registry
docker login --username ${REGISTRY} --passwd-stdin

# Build docker image
docker build -t ${REGISTRY}/${BUILD_NAME}:${TAG_REVISION}-${RANDOM_STRING} .

# Tag the docker image
docker tag ${REGISTRY}/${BUILD_NAME}:${TAG_REVISION}-${RANDOM_STRING} ${REGISTRY}/${BUILD_NAME}:"latest-"${EXECUTION_ENVIRONMENT}

# Push docker images
docker push ${REGISTRY}/${BUILD_NAME}:${TAG_REVISION}-${RANDOM_STRING}
docker push ${REGISTRY}/${BUILD_NAME}:"latest-"${EXECUTION_ENVIRONMENT}
