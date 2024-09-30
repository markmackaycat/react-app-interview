# Dockerfile for running two applications concurrently

# Use Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code into the container
COPY . .

# Expose the ports for both apps
EXPOSE 3001
EXPOSE 5800

# Start both applications concurrently by running npm start
CMD ["npm", "run", "start"]
