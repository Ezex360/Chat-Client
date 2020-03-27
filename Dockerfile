FROM node:13.10 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
