const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

// Configuración de la conexión a la base de datos
const dbConnection = mysql.createConnection({
  host: 'db',  // 'db' es el nombre del servicio de la base de datos en docker-compose
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

app.get('/', (req, res) => {
  res.send("WebApp Devops curso UTN");
});


app.get('/get-data', (req, res) => {
  dbConnection.query('SELECT * FROM contactos', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);  
      return res.status(500).json({
        error: 'Error al obtener los datos',
        message: err.message,  
        code: err.code,        
        stack: err.stack,     
      });
    }
    res.json(results);  
  });
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});







