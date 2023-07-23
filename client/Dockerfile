# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copying package.json and yarn.lock (if available) to the working directory
COPY package*.json /app/
COPY yarn.lock ./

# Installing dependencies
RUN yarn install --frozen-lockfile

# Copying the rest of the frontend application to the working directory
COPY . /app/

# Building the React.js app
RUN yarn build

# Stage 1, based on Nginx, to serve the frontend
FROM nginx:1.15

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# From 'build-stage', copy over the artifacts of the React.js build to the default Nginx public directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# If you have custom nginx conf, uncomment the following line
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Starting Nginx process
CMD ["nginx", "-g", "daemon off;"]
