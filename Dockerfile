FROM timbru31/node-alpine-git

# get current master
RUN git clone https://github.com/girlsjs/www.git

# install dependencies
RUN yarn --cwd=/www/
RUN yarn --cwd=/www/pl/

# copy the config.json
COPY ./server/config.json /www/server

# initial build
RUN yarn --cwd=/www/pl/ hexo generate --config=_prod-config.yml

# run!
CMD node /www/server/index.js
