FROM node:latest
WORKDIR /rest
COPY ./config ./config
COPY ./entities ./entities
COPY ./middlewares ./middlewares
COPY ./app.js .
COPY ./routes ./routes
COPY ./package.json .
RUN npm install
CMD [ "node","app.js" ]