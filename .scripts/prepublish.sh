#!/bin/bash

# IMPORTANT
# ---------
# This is an auto generated file with React CDK.
# Do not modify this file.
# Use `.scripts/user/prepublish.sh instead`.

echo "=> Transpiling 'src' into ES5 ..."
echo ""
rm -rf ./dist
NODE_ENV=production ./node_modules/.bin/babel --ignore tests,stories ./src --out-dir ./dist || { echo 'Transpilation failed' ; exit 1; }
echo ""
echo "=> Transpiling completed."

. .scripts/user/prepublish.sh
