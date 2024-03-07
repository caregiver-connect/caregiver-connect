FROM beevelop/ionic:latest as ionic
WORKDIR /app
COPY . /app
EXPOSE 8100
RUN npm install
RUN npm install vite
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]

FROM postgres:latest as postgres
WORKDIR /init
COPY /init /init
RUN chmod +x /init/postgres-init.sh
RUN cd init
RUN ./postgres-init.sh