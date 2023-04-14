FROM node:alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
# RUN npm install -g @angular/cli
RUN npm run build 

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/youbike /usr/share/nginx/html
