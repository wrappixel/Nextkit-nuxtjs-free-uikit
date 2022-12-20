FROM node:14-alpine 

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN apk add --no-cache git openssh

RUN yarn 
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
