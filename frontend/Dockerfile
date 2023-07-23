# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copying package.json and package-lock.json (if available) to the working directory
COPY package*.json /app/
COPY yarn.lock ./ 

# Installing dependencies
RUN yarn install --frozen-lockfile

# Copying the rest of the frontend application to the working directory
COPY . /app/

# Building the Next.js app
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

# Copying the build output from Stage 0 to the Nginx html directory
COPY --from=build-stage /app/out /usr/share/nginx/html

# Copying the Nginx configuration file
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Copying the additional Nginx configuration file
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
