FROM node:16.9.1

ENV NODE_ENV=development

WORKDIR /app

RUN apt-get update && apt-get install -y netcat

COPY ./build/entrypoint.sh .
RUN chmod +x /app/entrypoint.sh

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

ENTRYPOINT  ["/app/entrypoint.sh"]