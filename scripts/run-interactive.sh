#!/usr/bin/env bash
set -euo pipefail

docker-compose -f docker-compose.yml -f docker-compose-interactive.yml build
docker-compose -f docker-compose.yml -f docker-compose-interactive.yml up --remove-orphans

