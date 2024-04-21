docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)

docker-compose up --build --force-recreate --no-deps

curl -X POST -H "Content-Type: application/json" -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGh1bDA3MDBAZ21haWwuY29tIiwiaWF0IjoxNzEzNzIwNzE0LCJleHAiOjE3MTM3MjQzMTR9.9Av6Ml6DuidYQ69JyH2kzgsj5EjblMGPu64LL72Hd3c","user_id": "mithul"}' http://localhost:8081/api/email/verify-email

curl -X POST -H "Content-Type: application/json" -d '{"email": "mithul0700@gmail.com","user_id": "mithul"}' http://localhost:8081/api/email/send-verification-email