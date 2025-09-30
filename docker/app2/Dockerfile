FROM node:lts-alpine3.22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine3.22
RUN npm install pm2 -g
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app .
USER appuser:appgroup
EXPOSE 3001
CMD ["pm2-runtime", "apps/app2/index.js"]
