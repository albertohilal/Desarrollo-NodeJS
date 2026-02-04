// Archivo principal para iniciar el servidor

import express from 'express';
import connectDB from './config/connectionDB.js';
import dotenv from 'dotenv';
import ENVIRONMENT from './config/environment.js';

dotenv.config();

const app = express();
const PORT = ENVIRONMENT.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});