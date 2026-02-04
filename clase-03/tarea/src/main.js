// Archivo principal para iniciar el servidor

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch((error) => console.error('Error al conectar a la base de datos:', error));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});