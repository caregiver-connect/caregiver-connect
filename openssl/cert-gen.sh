#!/bin/bash

openssl genrsa -out /dev/stdout 2048 > /openssl-certs/cs495-spring2024-09.ua.edu.key

openssl req -new -key cs495-spring2024-09.ua.edu.key -out /openssl-certs/cs495-spring2024-09.ua.edu.csr -config csr_config.cnf

openssl x509 -req -days 365 -in cs495-spring2024-09.ua.edu.csr -signkey cs495-spring2024-09.ua.edu.key -out /dev/stdout > /openssl-certs/cs495-spring2024-09.ua.edu.crt

