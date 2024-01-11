FROM node:21-alpine3.19

RUN mkdir app
ADD lib/ app/


CMD ["node", "app/first.js"]