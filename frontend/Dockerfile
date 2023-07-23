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

# Stage 1, based on Node.js, to run the app
FROM node:18-alpine

WORKDIR /app

# Copying package.json and package-lock.json (if available) to the working directory
COPY package*.json /app/
COPY yarn.lock ./

# Installing dependencies
RUN yarn install --frozen-lockfile --production

# Copying the rest of the frontend application to the working directory
COPY . /app/

# Copying the build from the previous stage
COPY --from=build-stage /app/.next ./.next

# Starting the app
CMD ["yarn", "start"]
