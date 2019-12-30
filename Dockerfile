FROM node:12.2.0-alpine
RUN mkdir -p /code
RUN apk update && apk add bash
WORKDIR /code
ADD . /code
RUN npm install -g -s --no-progress yarn && yarn install
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 5000