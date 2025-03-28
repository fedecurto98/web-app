const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 8080;

const dbConfig = {
  host: 'db',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  waitForConnections: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi Aplicación Web</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #f0f0f0;
          padding: 20px;
        }
        h1 {
          color: #333;
        }
        div {
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Mi Aplicación Web</h1>
      <div>WebApp Devops curso UTN - Home</div>
    </body>
    </html>
  `);
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
