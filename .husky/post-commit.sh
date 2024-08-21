#!/bin/sh
branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$branch" = "master" ]; then
  git push origin master
fi
