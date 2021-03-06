FROM mhart/alpine-node:0.10.48
MAINTAINER butlerx <butlerx@notthe.cloud>

RUN apk add --update git make gcc g++ python && \
    mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN npm install && \
    node_modules/.bin/bower install --allow-root && \
    npm run lint-lib && \
    npm run gulp && \
    apk del make gcc g++ python && \
    rm -rf /tmp/* /root/.npm /root/.node-gyp
EXPOSE 8000
CMD ["node", "service.js"]
