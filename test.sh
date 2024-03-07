#! /usr/bin/bash
docker exec -it postgres /bin/bash -c "psql -U postgres -f /var/lib/postgresql/data/demo_test.sql"