#!/usr/bin/env bash

mv -f ./dist/index.html ./../demoApp/www/
mv -f ./dist/js/** ./../demoApp/www/js
mv -f ./dist/css/**  ./../demoApp/www/css
mv -f ./dist/icon/**  ./../demoApp/www/icon
rm -f -r ../dist
rm -f -r ./dist

