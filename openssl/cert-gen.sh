#!/bin/bash

openssl genrsa -out cs495-spring2024-09.ua.edu.key 2048
openssl req -new -key cs495-spring2024-09.ua.edu.key -out cs495-spring2024-09.ua.edu.csr
openssl x509 -req -days 365 -in cs495-spring2024-09.ua.edu.csr -signkey cs495-spring2024-09.ua.edu.key -out cs495-spring2024-09.ua.edu.crt
