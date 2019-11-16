#! /bin/bash

rm -r build/
yarn build
aws s3 sync build/ s3://savelet.xyz
