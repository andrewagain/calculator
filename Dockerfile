#Build
FROM node:10-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
###########################
#Deploy
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html/calculator
RUN mv ../static .
EXPOSE 80
