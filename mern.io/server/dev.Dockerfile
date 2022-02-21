# Base image
FROM node:16

# Determine working directory
WORKDIR /app

# Install dependencies
COPY yarn.lock .
COPY package.json .
RUN yarn install --frozen-lockfile

# Copy all required directories
COPY config/ config/
COPY models/ models/
COPY server.js server.js
COPY middleware/ middleware/
COPY routes/ routes/
COPY controllers/ controllers/

# Bind port 5000
EXPOSE 5000

# Run the app in development mode
CMD [ "yarn", "dev" ]
