const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

// Configuración de la conexión a la base de datos
const dbConnection = mysql.createConnection({
  host: 'mysql-db',  // 'db' es el nombre del servicio de la base de datos en docker-compose
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
});

dbConnection.connect((err) => {
  if (err) {
    console.error('error connecting to the database:', err.stack);
    return;
  }
  console.log('connected to the database');
});


app.get('/get-data', (req, res) => {
  connection.query('SELECT * FROM contactos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los datos' });
    }
    res.json(results);  // Devuelve los datos obtenidos de la base de datos
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});







