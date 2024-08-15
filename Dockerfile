# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file from the host into the /app directory in the container
COPY package.json .

# Install the dependencies specified in package.json
RUN npm install

# Install the 'serve' package globally in the container
RUN npm i -g serve

# Copy the rest of the application files from the host into the /app directory in the container
COPY . .

# Build the application using the 'build' script defined in package.json
RUN npm run build

# Expose port 3000 to be accessible from outside the container
EXPOSE 3000

# Define the command to run the application using the 'serve' package to serve the built files from the 'dist' directory
CMD [ "serve", "-s", "dist" ]

