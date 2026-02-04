import mongoose from 'mongoose';
import ENVIRONMENT from './environment.js';

const connectDB = async () => {
  try {
    await mongoose.connect(ENVIRONMENT.MONGO_DB_CONNECTION_STRING);
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};

export default connectDB;