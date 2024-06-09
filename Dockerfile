# stage 1
# install and build dependencies on this projects
FROM node:20.11.1-alpine3.19 AS builder

WORKDIR /app

# install dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# build applications
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# stage 2
# runner for running the application
FROM node:20.11.1-alpine3.19


FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

# copy from builder
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# expose port applications
EXPOSE 3000

CMD ["pnpm", "start"]