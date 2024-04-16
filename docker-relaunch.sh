docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)

docker-compose up --build --force-recreate --no-deps

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email": "mithul0700@gmail.com","user_id": "mithul"}' \
  http://localhost:8081/api/email/verify-email