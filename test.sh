#!/usr/bin/env bash

start=`date +%s`
cd examples/basic-app
yarn build
end=`date +%s`
runtime=$((end-start))
echo " "
echo "Build complete in ${runtime} seconds"
yarn start
