FROM node:14-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --frozen-lockfile

COPY public/ public/
COPY .dockerignore .dockerignore
COPY craco.config.js craco.config.js
COPY src/ src/

EXPOSE 3000

CMD ["yarn", "start"]
