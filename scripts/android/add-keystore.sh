#!/bin/sh

echo "Decrypting keystore."

openssl aes-256-cbc -d -k "$KEY_STORE_PASSWORD" -a -in ./scripts/android/keystore/game-buat-dina.keystore.enc -out ./scripts/android/keystore/game-buat-dina.keystore
