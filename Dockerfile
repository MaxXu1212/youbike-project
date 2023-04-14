FROM node:alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm install -g @angular/cli
RUN npm run build --configuration

CMD ["npm", "start"]

# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html
