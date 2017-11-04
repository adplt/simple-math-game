#! /bin/bash

if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
  echo "This is a pull request - no native build will be done"
  exit 0
fi

if [[ "$DEV" = "ANDROID" ]]; then
  scripts/android/add-keystore.sh
fi
