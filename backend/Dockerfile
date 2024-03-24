FROM node:latest

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN mkdir -p certs

COPY ../openssl/certs ./certs

CMD [ "node", "server.js" ]
