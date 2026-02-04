# Clase 3 - Roadmap de Desarrollo de la API con Node.js y Express

En esta clase, hemos trabajado en la creación de una API REST utilizando Node.js, Express y MongoDB. A continuación, se detalla un resumen de los pasos realizados:

## 1. Configuración inicial del proyecto
- Creamos la estructura del proyecto en la carpeta `clase-03`.
- Inicializamos el proyecto con `npm init -y` para generar el archivo `package.json`.
- Instalamos las dependencias necesarias:
  ```bash
  npm install express mongoose dotenv
  ```
- Instalamos `nodemon` como dependencia de desarrollo:
  ```bash
  npm install --save-dev nodemon
  ```
- Configuramos el script de desarrollo en el `package.json`:
  ```json
  "scripts": {
      "dev": "nodemon src/main.js"
  }
  ```

## 2. Configuración de la base de datos
- Creamos el archivo `src/config/connectionDB.js` para manejar la conexión a MongoDB utilizando Mongoose.
- Configuramos las variables de entorno en el archivo `.env` para almacenar la cadena de conexión a MongoDB y el puerto del servidor.
- Creamos el archivo `src/config/environment.js` para cargar las variables de entorno desde `.env`.

## 3. Creación del modelo de datos
- Creamos el archivo `src/models/product.model.js` para definir el esquema de los productos en la base de datos.

## 4. Implementación del repositorio
- Creamos el archivo `src/repository/product.repository.js` para manejar la lógica de interacción con la base de datos.
- Definimos las siguientes funciones en el repositorio:
  - `createProduct`: Crear un nuevo producto.
  - `buscarProductoPorId`: Buscar un producto por su ID.
  - `buscarTodosLosProductos`: Obtener todos los productos.
  - `eliminarProductoPorId`: Eliminar un producto por su ID.
  - `actualizarProductoPorId`: Actualizar un producto por su ID.

## 5. Configuración de las rutas
- Creamos el archivo `src/routes/product.router.js` para manejar las rutas relacionadas con los productos.
- Movimos las rutas de `main.js` a este archivo:
  - `GET /api/products`: Obtener todos los productos.
  - `GET /api/products/:id`: Obtener un producto por su ID.
  - `POST /api/products`: Crear un nuevo producto.
  - `DELETE /api/products/:id`: Eliminar un producto por su ID.
- Inicialmente, definimos las rutas en `main.js` para manejar las operaciones de la API relacionadas con los productos.
- Posteriormente, movimos estas rutas al archivo `src/routes/product.router.js` para seguir el principio de separación de responsabilidades y mantener el código más organizado.

## 6. Actualización de `main.js`
- Registramos el `productRouter` en `main.js` con el prefijo `/api/products`:
  ```javascript
  import productRouter from './routes/product.router.js';
  app.use('/api/products', productRouter);
  ```
- Agregamos comentarios explicativos en `main.js` para indicar que las rutas ahora están en `product.router.js`.

## 7. Verificación de la API
- Probamos las rutas utilizando Postman:
  - **GET /api/products**: Devuelve todos los productos.
  - **GET /api/products/:id**: Devuelve un producto específico por su ID.
  - **POST /api/products**: Crea un nuevo producto en la base de datos.
  - **DELETE /api/products/:id**: Elimina un producto por su ID.

## 8. Creación de un commit
- Realizamos un commit con los cambios realizados:
  ```bash
  git add .
  git commit -m "Refactor: Move database logic to product.repository.js and update main.js with clear comments and repository function usage"
  ```

## Resultado final
- La API está funcionando correctamente con las rutas organizadas en `product.router.js` y la lógica de la base de datos en `product.repository.js`.
- El servidor está conectado a MongoDB y permite realizar operaciones CRUD sobre la colección `products`.

---

Este roadmap puede servir como referencia para futuras implementaciones y para entender cómo estructurar un proyecto de API REST con Node.js y Express.