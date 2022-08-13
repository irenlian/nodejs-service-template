FROM node:14-alpine

ADD ./src ./src
WORKDIR /src

COPY src .editorconfig ./

COPY ./src/package*.json ./

RUN npm ci && npm run build

WORKDIR /src

COPY --from=build /src ./

ENV PATH="./node_modules/.bin:${PATH}"

EXPOSE 4000

# It's considered a best practice to run node index.js instead of `npm start` in order to be able to process signals
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#cmd

CMD ["node", "dist/index.js"]
