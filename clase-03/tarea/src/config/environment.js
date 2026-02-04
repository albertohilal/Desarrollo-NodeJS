import dotenv from 'dotenv';

// Cargar las variables del archivo .env en process.env
dotenv.config();

// Este archivo centraliza las variables de entorno del proyecto, lo que facilita su acceso y mejora la organización del código.
const ENVIRONMENT = {
    MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING,
    PORT: process.env.PORT
};

export default ENVIRONMENT;