FROM node:13-alpine as build
WORKDIR /src
COPY package*.json /src/
RUN npm install -g ionic
RUN npm install
COPY ./ /app/
EXPOSE 8100
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]