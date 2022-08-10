FROM node:14-alpine

ADD ./app ./app
WORKDIR /app

COPY app .editorconfig ./

COPY ./app/package*.json ./

RUN npm ci && npm run build

WORKDIR /app

COPY --from=build /app ./

ENV PATH="./node_modules/.bin:${PATH}"

EXPOSE 4000

# It's considered a best practice to run node index.js instead of `npm start` in order to be able to process signals
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#cmd

CMD ["node", "dist/index.js"]
