FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package*.json nx.json tsconfig.base.json ./
COPY pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN npm install -g nx

RUN npx nx@latest init

RUN pnpm i --prod

ENV NX_DAEMON=false

COPY . .

RUN nx run angular-graphql-apollo:build:production

FROM caddy:latest

COPY --from=builder /usr/src/app/dist /var/www/html

# Caddyfile configuration
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]