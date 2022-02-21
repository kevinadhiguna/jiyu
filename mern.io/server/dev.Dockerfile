FROM node:16

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile

COPY config/ config/
COPY controllers/ controllers/
COPY middleware/ middleware/
COPY models/ models/
COPY routes/ routes/
COPY server.js server.js

EXPOSE 5000

CMD [ "yarn", "dev" ]
