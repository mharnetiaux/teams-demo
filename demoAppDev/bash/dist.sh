#!/usr/bin/env bash

mv -f ./dist/index.html ./../demoApp/www/
mv -f ./dist/js/** ./../demoApp/www/js
mv -f ./dist/css/**  ./../demoApp/www/css
rm -f -r ./../demoApp/www/css/img && mv -f ./dist/img ./../demoApp/www/css
rm -f -r ../dist
rm -f -r ./dist

