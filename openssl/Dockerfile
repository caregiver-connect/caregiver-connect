FROM alpine:latest

# Install OpenSSL
RUN apk update && \
  apk add --no-cache openssl && \
  rm -rf "/var/cache/apk/*"

WORKDIR /cert-gen

COPY cert-gen.sh cert-gen.sh

COPY csr_cert.cnf csr_cert.cnf

# Create and set mount volume
WORKDIR /openssl-certs

VOLUME  /openssl-certs

# Credit: https://github.com/alexisrolland/docker-openssl