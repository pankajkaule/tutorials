FROM node:14

COPY . opt/app

WORKDIR /opt/app

RUN npm install pm2 -g

CMD ["pm2-runtime","process.yml","--no-autorestart"]

