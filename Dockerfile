FROM nginx:alpine

RUN apk add --update nodejs npm

RUN node -v && npm -v

COPY . /src

WORKDIR /src

RUN npm i && npm test

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
