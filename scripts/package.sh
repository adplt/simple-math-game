#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
  echo "This is a pull request - no packaging will be done"
  exit 0
fi
