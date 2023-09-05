#step 1: Build App
FROM node:16.13.0 as build

RUN npm install npm@8.1.0npm 
RUN rm -rf /usr/local/lib/node_modules/npm
RUN mv node_modules/npm /usr/local/lib/node_modules/npm

# step 2: set working directorycls
WORKDIR /usr/local/app

#step 3: add source code to app
COPY ./ /usr/local/app/

#Install NPM dependencies
RUN npm install

# generate build from application
RUN npm run build

#serve with nginx server
FROM nginx:latest

COPY --from=build /usr/local/app/dist/yash-portfolio /usr/share/nginx/html

EXPOSE 80