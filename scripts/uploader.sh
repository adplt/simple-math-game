#!/bin/bash

if [[ "$TRAVIS_PULL_REQUEST" != "false" ]]; then
	  echo "This is a pull request. No deployment will be done."
	    exit 0
fi

if [[ "$DEV" = "IOS" ]]; then
  echo "Uploading ipa to TestFairy..."
  ./scripts/tf_uploader.sh "./ios/build/Products/IPA/GameBuatDina.ipa"
fi

if [[ "$DEV" = "ANDROID" ]]; then
  echo "Uploading apk to TestFairy..."
  ./scripts/tf_uploader.sh "./android/app/build/outputs/apk/app-release.apk"
fi
