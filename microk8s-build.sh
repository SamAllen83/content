#!/usr/bin/env bash
docker build -t content .
docker push localhost:32000/content