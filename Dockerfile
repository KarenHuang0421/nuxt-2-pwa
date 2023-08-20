FROM node:16.18.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --verbose

RUN npm run build

COPY . .

EXPOSE 3000

# 容器內 我們 nuxt 的 host 和 port 指定給環境變數
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]