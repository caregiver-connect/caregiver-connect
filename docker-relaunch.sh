docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)

docker-compose up --build --force-recreate --no-deps

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pdGh1bDA3MDBAZ21haWwuY29tIiwiaWF0IjoxNzEzMjk3NDk5LCJleHAiOjE3MTMzMDEwOTl9.OswT5cuD4u9nKgIaBLRYtb_qHLfEqrosP2twObzpBCk","user_id": "mithul"}' \
  http://localhost:8081/api/email/verify-email

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email": "mithul0700@gmail.com","user_id": "mithul"}' \
  http://localhost:8081/api/email/send-verification-email