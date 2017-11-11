#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
	  echo "This is a pull request - no native build will be done"
	    exit 0
fi

if [[ "$DEV" = "IOS" ]]; then
  #xcodebuild -project $PWD/ios/ubyapp.xcodeproj -scheme ubyapp -configuration RELEASE OBJROOT=$PWD/ios/build SYMROOT=$PWD/ios/build -destination 'platform=iOS Simulator,name=iPhone 6,OS=9.3'
  xcodebuild archive -project ./ios/GameBuatDina.xcodeproj -scheme GameBuatDina -configuration RELEASE -derivedDataPath ./ios/build -archivePath ./ios/Production/GameBuatDina.xcarchive
fi

if [[ "$DEV" = "ANDROID" ]]; then
  if [[ "$TRAVIS_EVENT_TYPE" = "cron" ]]; then
    echo "UAT build - set version"
    BUILD_NUMBER=$BUILD_NUMBER".UAT"
  fi
  echo $BUILD_NUMBER
  cd android && ./gradlew clean assembleRelease
  echo "==============================START DMESG========================"
  sudo dmesg
  echo "==============================END DMESG========================"
fi
