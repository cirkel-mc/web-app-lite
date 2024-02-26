FROM node:20.11.1-alpine3.19 AS deps

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY node_modules ./node_modules

COPY . .

RUN npm run build

RUN npm install -g serve

COPY /app/dist ./

EXPOSE 3000

ENTRYPOINT ["serve","-p","3000","-s","."]