#!/bin/bash
sudo apt remove cmdtest
sudo apt autoremove && sudo apt remove yarn
#Install node --version 14
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
## Run `sudo apt-get install -y nodejs` to install Node.js 14.x and npm
## You may also need development tools to build native addons:
     #sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     #curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     #echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     #sudo apt-get update && sudo apt-get install yarn
sudo apt-get install -y nodejs
sudo apt-get install -y gcc g++ make


curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update  && sudo apt-get -y install yarn

