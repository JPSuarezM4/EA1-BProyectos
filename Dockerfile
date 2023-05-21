# Imagen a usar
FROM node:18.15.0

# Ruta en el contenedor
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

ENTRYPOINT [ "node", "server.js" ]