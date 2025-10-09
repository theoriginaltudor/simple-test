# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Install dependencies: use npm ci when a lockfile is present, otherwise npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Use custom nginx config listening on port 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
