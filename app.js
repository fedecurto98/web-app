const express = require('express');
const mysql = require('mysql2/promise');  // Versión con promesas
const app = express();
const port = 8080;

// Configuración del pool de conexiones
const dbConfig = {
  MYSQL_HOST: 'db',
  MYSQL_USER: 'myuser',
  MYSQL_PASSWORD: 'mypassword',
  MYSQL_DATABASE: 'mydatabase',
  waitForConnections: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);  // Crear el pool de conexiones

app.get('/', (req, res) => {
  res.send("WebApp Devops curso UTN");
});

app.get('/get-data', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contactos');  // Usando el pool
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
