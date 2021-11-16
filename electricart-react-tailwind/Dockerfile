FROM node:14-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
