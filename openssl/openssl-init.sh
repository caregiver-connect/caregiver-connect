#!/bin/bash

# Test script for building docker-openssl

# Build Docker image
docker build -t docker-openssl:latest .

docker run -it --rm -v "certs:/openssl-certs" docker-openssl:latest