#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
	  echo "This is a pull request - no native build will be done"
	    exit 0
fi

if [[ "$DEV" = "ANDROID" ]]; then
  if [[ "$TRAVIS_EVENT_TYPE" = "cron" ]]; then
    echo "UAT build - set version"
    BUILD_NUMBER=$BUILD_NUMBER".UAT"
  fi
  echo $BUILD_NUMBER
  cd android && ./gradlew clean assembleRelease --info --stacktrace
  echo "==============================START DMESG========================"
  sudo dmesg
  echo "==============================END DMESG========================"
fi
