#!/bin/sh

echo "Decrypting keystore."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in scripts/android/keystore/travel-app.keystore.enc -d -a -out android/app/travel-app.keystore
