FROM node:20-alpine

# Install build dependencies for native modules if needed
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies (needed for tsx)
RUN npm install

# Copy source code
COPY . .

# Explose port
EXPOSE 5000

# Run with tsx (as defined in package.json start script)
CMD ["npm", "start"]
