# Build Stage 1
# This build created a staging docker image
#
FROM node:16-alpine AS appBuild

WORKDIR /home/app

COPY . .

RUN npm install
RUN npm run build

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:16-alpine

RUN apk add --no-cache libcap

WORKDIR /home/app

COPY package.json ./
COPY next.config.js ./

RUN npm install --omit=dev

COPY --from=appBuild /home/app/.next ./.next

ENV NODE_ENV=production PORT=80

# Set the privileges for our built app executable to run on privileged ports
RUN setcap 'cap_net_bind_service=+ep' /usr/local/bin/node

RUN chown -R node:node /home/app
USER node

EXPOSE 80

CMD ["npm", "start"]
