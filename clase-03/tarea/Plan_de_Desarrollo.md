# Plan de Desarrollo

## Objetivo
Desarrollar una API REST utilizando Node.js, Express y MongoDB, siguiendo las mejores prácticas de desarrollo y organización de código.

## Estructura del Proyecto
- **src/**: Contendrá el código fuente de la aplicación. ✅
  - **config/**: Configuración de la aplicación (por ejemplo, conexión a la base de datos). ✅
- **.env**: Variables de entorno. ✅

## Pasos de Desarrollo
1. **Inicialización del Proyecto**: ✅
   - Crear un nuevo proyecto de Node.js con `npm init -y`. ✅
   - Configurar el archivo `package.json` para incluir el script de desarrollo: ✅
     ```json
     "scripts": {
       "dev": "node --watch src/main.js"
     }
     ```

2. **Instalación de Dependencias**: ✅
   - Instalar `express` para manejar las rutas y solicitudes HTTP: ✅
     ```bash
     npm install express
     ```
   - Instalar `dotenv` para la gestión de variables de entorno: ✅
     ```bash
     npm install dotenv
     ```
   - Instalar `mongoose` para manejar la conexión y las operaciones con MongoDB: ✅
     ```bash
     npm install mongoose
     ```

3. **Configuración de la Base de Datos**: ✅
   - Crear el archivo `src/config/connectionDB.js` con la lógica de conexión a MongoDB utilizando Mongoose: ✅
     ```javascript
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
     ```

4. **Creación del Servidor**: ✅
   - Crear el archivo `src/main.js` con el siguiente contenido: ✅
     ```javascript
     import express from 'express';
     import connectDB from './config/connectionDB.js';
     import dotenv from 'dotenv';

     dotenv.config();

     const app = express();
     const PORT = process.env.PORT || 3000;

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
     ```

5. **Configuración de Variables de Entorno**: ✅
   - Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido: ✅
     ```env
     MONGO_DB_CONNECTION_STRING=<TU_URI_DE_MONGODB>
     PORT=8080
     ```

6. **Definir un esquema y modelo en Mongoose**: ✅
   - Elegir un recurso (por ejemplo: productos, usuarios o tareas). ✅
   - Definir un esquema con al menos 3 campos, incluyendo uno obligatorio (`required`) y otro con valor por defecto. ✅
   - Crear un modelo a partir de ese esquema. ✅

7. **Implementar las rutas CRUD en Express**: ✅
   - **POST** → Crear un nuevo documento. ✅
   - **GET** → Obtener todos los documentos. ✅
   - **GET /:id** → Obtener un documento por su ID. ✅
   - **PUT /:id** → Actualizar un documento. ✅
   - **DELETE /:id** → Eliminar un documento. ✅

8. **Validar los datos enviados**: ✅
   - Asegurarse de que los datos enviados cumplan con las reglas definidas en el esquema. ✅

9. **Pruebas**: ✅
   - Usar Postman para probar cada una de las rutas y verificar que los cambios se reflejan en la base de datos. ✅

10. **Completar el archivo `README.md`**:
    - Descripción breve del proyecto.
    - Instrucciones para clonar, instalar dependencias y ejecutar.
    - Ejemplos de uso de las rutas con capturas de Postman.
    - Créditos del autor.
    - Citación de fuentes (bibliografía y documentación utilizada).

## Actualización de Configuración de Mongoose ✅

Se eliminaron las opciones `useNewUrlParser` y `useUnifiedTopology` de la configuración de Mongoose en el archivo `connectionDB.js`. Estas opciones ya no son necesarias en las versiones más recientes del controlador de MongoDB (a partir de la versión 4.0.0) y serán eliminadas en futuras versiones. Esto asegura que el código esté actualizado y evita advertencias innecesarias durante la ejecución del servidor.

El archivo `connectionDB.js` actualizado es el siguiente:

```javascript
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
```

El archivo `environment.js` centraliza las variables de entorno, lo que facilita su acceso y mejora la organización del código. Es importante mantener este archivo actualizado con todas las variables de entorno necesarias para el proyecto.

## Herramientas y Tecnologías
- **Node.js**: Entorno de ejecución para JavaScript. ✅
- **Express**: Framework para construir aplicaciones web. ✅
- **MongoDB**: Base de datos NoSQL. ✅
- **Mongoose**: ODM para MongoDB. ✅
- **dotenv**: Gestión de variables de entorno. ✅

## Notas Adicionales
- Seguir las mejores prácticas de desarrollo. ✅
- Mantener el código modular y reutilizable. ✅