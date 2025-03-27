# Usa la imagen oficial de Node.js como base
FROM node:16

# Crea el directorio donde estará tu app dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY . .

# Si tienes un archivo package.json y necesitas instalar dependencias de npm (por ejemplo express)
RUN npm install

# Expón el puerto 8080, que es el puerto en el que escuchará tu servidor web
EXPOSE 8080

# Comando para iniciar el servidor cuando el contenedor se levante
CMD ["node", "app.js"]
