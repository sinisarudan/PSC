#!/bin/sh

# this is necessary for angular 9 and compiling angular 8 versions of libs, ...

# node {{{ENV:ANGULAR_PATH}}}/angular-9/node_modules/@angular/compiler-cli/ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points

# https://stackoverflow.com/questions/34650527/how-to-use-environment-variables-in-package-json?rq=1
# Path has to be absolute:
# like: `export ANGULAR_PATH="/Users/mprinc/data/development/common-dev-zontik/angular/angular-versions"`
# and not: `export ANGULAR_PATH="~/data/development/common-dev-zontik/angular/angular-versions"`
node `echo $ANGULAR_PATH`/angular-9/node_modules/@angular/compiler-cli/ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points


