#!/usr/bin/env bash
docker build -t localhost:32000/content .
docker push localhost:32000/content