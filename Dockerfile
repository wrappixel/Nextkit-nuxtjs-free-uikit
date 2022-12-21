FROM node:14

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

# RUN apk add --no-cache git openssh

RUN yarn 
RUN yarn build
RUN yarn generate

EXPOSE 3000

ENV HOST 0.0.0.0
