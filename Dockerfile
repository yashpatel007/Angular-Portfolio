#step 1: Build App
FROM node:16.13 as build


# Set environment variables for NVM
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.13

# Install NVM
RUN mkdir -p $NVM_DIR && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Install the specified Node.js version
RUN . $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION

# Set the Node.js version as the default
RUN . $NVM_DIR/nvm.sh && nvm use default

# step 2: set working directoryclsnpm -v
WORKDIR /usr/local/app

#step 3: add source code to app
COPY ./ /usr/local/app/

RUN npm install -g npm@8.1.0
#Install NPM dependencies
RUN npm install

# generate build from application
RUN npm run build --prod

#serve with nginx server insta
FROM nginx:latest

COPY --from=build /usr/local/app/dist/yash-portfolio /usr/share/nginx/html

EXPOSE 80