FROM beevelop/ionic:latest
WORKDIR /app
COPY . /app
EXPOSE 8100
RUN npm install
RUN npm install vite
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open", "--ssl", "--ssl-key ./openssl/certs/cs495-spring2024-09.ua.edu.key", "--ssl-cert ./openssl/certs/cs495-spring2024-09.ua.edu.crt"]