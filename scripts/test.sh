#!/usr/bin/env bash
set -eo pipefail

docker volume create artifacts
docker-compose -f docker-compose.yml -f docker-compose-test.yml build
docker-compose -f docker-compose.yml -f docker-compose-test.yml run --rm unique-service

# copy coverage files using a dummy container because mounting a local ./coverage to container doesn't work in CI
docker container create --name dummy -v artifacts:/tmp alpine:3.10
docker cp dummy:/tmp/. coverage
docker rm dummy
