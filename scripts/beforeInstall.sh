#!/bin/bash

sudo pkill -f "/var/www/spacemaster-web"

cd /var/www/spacemaster-web

sudo rm -rf package-lock.json

sudo npm cache clean --force