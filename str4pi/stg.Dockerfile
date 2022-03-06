### Multistage build ###

FROM node:16-alpine as builder

WORKDIR /app-builder

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY favicon.ico .
COPY public/robots.txt public/
COPY config/ config/
COPY src/ src/

CMD [ "yarn", "build" ]

FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --prod

COPY --from=builder /app-builder/build /app/build

EXPOSE 1337

CMD [ "yarn", "start" ]
