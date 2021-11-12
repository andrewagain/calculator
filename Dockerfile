FROM node:12.13.0-alpine as build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html