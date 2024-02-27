FROM beevelop/ionic:latest
WORKDIR /app
COPY . /app
EXPOSE 8100
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]