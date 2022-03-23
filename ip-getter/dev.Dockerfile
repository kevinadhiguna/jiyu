FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY .dockerignore .dockerignore
COPY route/ route/
COPY server.js server.js
COPY controller/ controller/

EXPOSE 5000

CMD [ "yarn", "start:dev" ]
