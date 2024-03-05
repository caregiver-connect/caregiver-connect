FROM beevelop/ionic:latest
WORKDIR /app
COPY . /app
EXPOSE 8100
RUN npm install
RUN npm install vite
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]
