FROM node:16-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --frozen-lockfile

COPY items.js items.js
COPY server.js server.js
COPY routes/ routes/
COPY controllers/ controllers/

EXPOSE 5000

CMD ["yarn", "start"]
