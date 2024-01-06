ARG NODE_IMAGE=node:16.13.1-alpine
ARG PORT=8967

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci --production

FROM dependencies AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node . .
EXPOSE $PORT
CMD [ "dumb-init", "node", "index.js" ]
