# Stage 1: Build the application
FROM node:18.15.0 AS build

# Create and change to the app directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Stage 2: Run the application
FROM node:18.15.0

# Create and change to the app directory
WORKDIR /app

# Copy the built code from the build stage
COPY --from=build /app/dist /app/dist

# Copy package.json and package-lock.json to install only production dependencies
COPY package*.json ./

# COPY .env file
COPY .env.example ./.env

# Install only production dependencies
RUN npm install --production

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["node", "dist/index.js"]