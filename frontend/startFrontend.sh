#!/usr/bin/env sh

cd /usr/share/nginx/html

# Backup main.js on first run
if [ $(ls -l | grep main | wc -l) ]; then
  cp main*.js ..
fi

# restore main.js
cp ../main*.js .

# Set Backend URL from docker-compose
echo "Using Backend URL: ${BACKEND_URL}"
sed -i "s~__BACKEND_URL_PLACEHOLDER__~${BACKEND_URL}~" main*.js

nginx -g "daemon off;"
