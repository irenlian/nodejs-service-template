#!/usr/bin/env bash
set -euo pipefail

docker-compose -f docker-compose.yml -f docker-compose-test.yml -f docker-compose-test-interactive.yml build
docker-compose -f docker-compose.yml -f docker-compose-test.yml -f docker-compose-test-interactive.yml run unique-service

