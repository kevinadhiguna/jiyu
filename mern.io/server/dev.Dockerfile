FROM node:16

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD [ "yarn", "dev" ]
