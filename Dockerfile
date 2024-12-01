

FROM node:16 AS build

WORKDIR /the/workdir/path


COPY  package*.json ./


RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000



CMD [ "npm","run","start:prod" ]