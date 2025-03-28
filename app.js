const express = require('express');
const mysql = require('mysql2/promise');  // ¡Cambia a la versión con promesas!
const app = express();
const port = 8080;

// Configuración de la conexión (sin conectar aún)
const dbConfig = {
  host: 'db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  waitForConnections: true,
  connectionLimit: 10,
};

dbConnection.connect((err) => {
  if (err) {
    console.error('error connecting to the database:', err.stack);
    return;
  }
  console.log('connected to the database');
});

// Pool de conexiones (mejor manejo de conexiones)
const pool = mysql.createPool(dbConfig);

app.get('/', (req, res) => {
  res.send("WebApp Devops curso UTN");
});

app.get('/get-data', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contactos');
    res.json(rows);
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({
      error: 'Error al obtener los datos',
      message: err.message,
    });
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});