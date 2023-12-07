FROM node:latest
LABEL authors="dinhcanhng303"

WORKDIR /app

RUN npm install -g pm2

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent

COPY . .

CMD ["npm", "run", "start:dev"]