docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)

docker-compose up --build --force-recreate --no-deps

curl -X POST -H "Content-Type: application/json" -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGh1bDA3MDBAZ21haWwuY29tIiwiaWF0IjoxNzEzNzIwNzE0LCJleHAiOjE3MTM3MjQzMTR9.9Av6Ml6DuidYQ69JyH2kzgsj5EjblMGPu64LL72Hd3c","user_id": "mithul"}' http://localhost:8081/api/email/verify-email

curl -X POST -H "Content-Type: application/json" -d '{"email": "mithul0700@gmail.com","user_id": "mithul"}' http://localhost:8081/api/email/send-verification-email

curl -X POST -H "Content-Type: application/json" -d '{"email": "mithul0700@gmail.com","user_id": "mithul"}' http://localhost:8081/api/email/reset-password-email

curl -X POST -H "Content-Type: application/json" -d '{"password": "newpassword", "confirmpassword": "newpassword", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGh1bDA3MDBAZ21haWwuY29tIiwiaWF0IjoxNzEzNzM1NjE0LCJleHAiOjE3MTM3MzkyMTR9.LfWESF3p98WU9yUPcy2Ai2RHT7gfvMXwNTOIM2rVATw","user_id": "mithul"}' http://localhost:8081/api/email/reset-password
