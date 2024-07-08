#!/bin/bash

apt update && apt upgrade -y

sudo apt install nodejs npm -y

npm install axios readline-sync figlet ws

mkdir oasis

cd oasis

wget https://raw.githubusercontent.com/ruesandora/Rivalz/main/update_token.js

wget https://raw.githubusercontent.com/ruesandora/Rivalz/main/oasis_terminal.js

echo "Kurulum tamamlandı, Repoya geri dönün ve sonraki adıma geçin" 