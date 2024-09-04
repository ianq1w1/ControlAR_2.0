# Use the official Node.js image
FROM node:22-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install dependencies
RUN npm install

# Start the application
CMD ["npm", "run", "dev"]
