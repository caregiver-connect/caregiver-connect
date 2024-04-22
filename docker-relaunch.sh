docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)

docker-compose up --build --force-recreate --no-deps

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email": "mithul0700@gmail.com"}' \
  http://localhost:8081/api/email/send-verification-email

curl http://cs495-spring2024-09.ua.edu:8081/api/email/verify-email?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGh1bDA3MDBAZ21haWwuY29tIiwiaWF0IjoxNzEyMDg3MDQ1LCJleHAiOjE3MTIwOTA2NDV9.723HIRClwQjFHoNNIxSCC3miSBf8BBryDZAb0osqyqE