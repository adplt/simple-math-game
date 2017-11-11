#!/bin/sh

echo "Decrypting keystore."

openssl aes-256-cbc -k "$KEY_STORE_PASSWORD" -in ./scripts/android/keystore/game-buat-dina.keystore.enc -d -a -out ./script/android/app/game-buat-dina.keystore
