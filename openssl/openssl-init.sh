#!/bin/bash

# Build Docker image
docker build -t docker-openssl:latest .

docker run -v "certs:/openssl-certs" docker-openssl:latest

docker exec mycontainer cert-gen.sh