#!/bin/bash
set -e
#Deploy lockmail frontend

BASE=/var/www/lockr/default
LIVENOW=$BASE/current
SRC=/home/ubuntu/lockr/github
DATE=$(date +'%d_%m_%Y_at_%H_%M_%S')
ENV_PATH=$BASE/env

#cd ~
echo "Start deploy lockrmail frontend\n"
cd $SRC

git checkout master
git fetch -p
git pull



echo "Release new version, prepare directory, etc.\n"
sudo mkdir -p $BASE/$DATE
rsync -a $SRC/* $BASE/$DATE >>/dev/null 2>&1


echo "Create symlynk\n"

sudo ln -sfn $BASE/$DATE $LIVENOW
sudo ln -sfn $ENV_PATH $BASE/$DATE/.env

echo "POSITION at $BASE/$DATE\n"


cd $BASE/$DATE

#Prepare the build
yarn build


echo "recording deploy date\n"
sudo touch $LIVENOW/deploy.txt
sudo chmod 0777 $LIVENOW/deploy.txt
echo $(date) >> "$LIVENOW/deploy.txt"

echo  "\n<< Deploy Done >>\n"