docker compose down --remove-orphans

docker rmi -f $(docker images -aq)

docker rmi -f $(docker images -aq)