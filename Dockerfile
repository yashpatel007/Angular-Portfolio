#step 1: Build App
FROM node:latest as build

# step 2: set working directory
WORKDIR /usr/local/app

#step 3: add source code to app
COPY ./ /usr/local/app/

#Install NPM dependencies
RUN npm install

# generate build from application
RUN npm run build

#serve with nginx server
FROM nginx:latest

COPY --from=build /usr/local/app/dist/portfolio /usr/share/nginx/html

EXPOSE 80




