FROM node:16

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile

COPY config/ config/
COPY models/ models/
COPY server.js server.js
COPY middleware/ middleware/
COPY routes/ routes/
COPY controllers/ controllers/

EXPOSE 5000

CMD [ "yarn", "dev" ]
