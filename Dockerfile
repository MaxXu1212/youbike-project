FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
COPY /src /src
RUN npm run build --output-path=./dist/youbike --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/youbikepractice /usr/share/nginx/html
