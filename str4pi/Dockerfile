# A dockerfile must always start by importing the base image.
# One can use the keyword 'FROM' to do that.
# Having built Strapi base image, replace "kaidoe" with your DockerHub username.
ARG ACCOUNT="kaidoe"
ARG BASE_VERSION="16"
ARG STRAPI_VERSION="4.0.2"

FROM ${ACCOUNT}/base:${BASE_VERSION}

# Set up working directory that will be used to copy files/directories below :
WORKDIR /app

# Copy package.json to root directory inside Docker container of Strapi app
COPY package.json .

# Copy yarn.lock to root directory inside Docker container of Strapi app
COPY yarn.lock .

# Install dependencies, but not generate a yarn.lock file and fail if an update is needed (for more : https://classic.yarnpkg.com/en/docs/cli/install/#toc-yarn-install-frozen-lockfile).
RUN yarn install --frozen-lockfile
# If the above command prompts an error, try running this instead :
#RUN yarn

# == Copy required files ==
# In order to launch our Strapi app, we must import it into our image.
# We use the keyword 'COPY' to do that.
# The first parameter is the name of the file on the host.
# The second parameter is the path where to put the file on the image.
# '.' or '/' means the file will be put in the image root folder.
COPY favicon.ico .
COPY public/robots.txt public/
# COPY public/index.html public/
# COPY extensions/ extensions/
# COPY exports/ exports/
# COPY api/ api/
COPY config/ config/
COPY src/ src/

# Generate a folder called 'build' which is the folder where files will be stored that can be directly used by others without the need to compile or minify the source code that is being reused.
RUN yarn build

# Run on port 1337
EXPOSE 1337

# We need to define the command to launch when we are going to run the image. We can use the keyword 'CMD' to do that.
# The following command will execute "yarn start".
CMD [ "yarn", "start" ]
