# Usa la imagen oficial de Node.js como base
FROM node:16

# Instala Git
RUN apt-get update && apt-get install -y git

# Crea un directorio para el proyecto y establece el directorio de trabajo
WORKDIR /usr/src/app

# Clona el repositorio
RUN git clone https://github.com/fedecurto98/web-app.git .

# Instala las dependencias de la aplicación
RUN npm install

# Expón el puerto 8080
EXPOSE 8080

# Ejecuta la aplicación
CMD ["node", "app.js"]
