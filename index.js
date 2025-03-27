const express = require('express');
const app = express();
const port = 8080;

const data = {
  message: "¡Hola, esta es la respuesta de tu aplicación web!"
};

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
