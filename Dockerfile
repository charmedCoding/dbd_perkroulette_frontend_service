FROM node:lts-alpine3.17 as build-stage
RUN mkdir /usr/app
WORKDIR /usr/app
COPY package*.json ./
RUN cd /usr/app
RUN npm install
COPY . /usr/app
RUN npm run build

FROM mtr.devops.telekom.de/caas/nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /usr/app/build /app
COPY nginx.conf /etc/nginx/nginx.conf