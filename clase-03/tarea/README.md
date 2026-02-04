# API REST de Gestión de Usuarios - Node.js y Express

## 👤 Descripción

API REST desarrollada con Node.js, Express y MongoDB para la gestión de usuarios. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de usuarios.

El proyecto implementa endpoints para:
- Crear nuevos usuarios
- Listar todos los usuarios
- Obtener un usuario específico por ID
- Actualizar información de usuarios existentes
- Eliminar usuarios

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js (versión 18 o superior)
- npm (Node Package Manager)

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/albertohilal/Desarrollo-NodeJS.git
cd Desarrollo-NodeJS/clase-03/tarea
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar las variables de entorno**
Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```env
MONGO_DB_CONNECTION_STRING=<TU_URI_DE_MONGODB>
PORT=8080
```

4. **Ejecutar el servidor**
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:8080`

## 📡 Endpoints de la API

### `POST /users`
Crea un nuevo usuario
- **Body (JSON)**:
  ```json
  {
    "name": "Nombre del usuario",
    "email": "Correo del usuario",
    "age": 25
  }
  ```
- **Campos obligatorios**: `name`, `email`, `age`
- **Respuesta (201)**: Usuario creado con éxito

### `GET /users`
Obtiene todos los usuarios
- **Respuesta**: Array con todos los usuarios

### `GET /users/:id`
Obtiene un usuario específico por su ID
- **Parámetro**: `id` (string)
- **Respuesta exitosa (200)**: Usuario encontrado
- **Respuesta de error (404)**: Usuario no encontrado

### `PUT /users/:id`
Actualiza un usuario existente
- **Parámetro**: `id` (string)
- **Body (JSON)**: Campos a actualizar (parciales o completos)
- **Respuesta exitosa (200)**: Usuario actualizado
- **Respuesta de error (404)**: Usuario no encontrado

### `DELETE /users/:id`
Elimina un usuario de la base de datos
- **Parámetro**: `id` (string)
- **Respuesta exitosa (200)**: Usuario eliminado
- **Respuesta de error (404)**: Usuario no encontrado

## 🗂️ Estructura del Proyecto

```
tarea/
├── src/
│   ├── config/
│   │   ├── connectionDB.js      # Configuración de la conexión a MongoDB
│   │   └── environment.js       # Variables de entorno
│   ├── models/
│   │   └── User.js              # Modelo de datos para usuarios
│   ├── repository/
│   │   └── user.repository.js   # Lógica de interacción con la base de datos
│   └── routes/
│       └── user.router.js       # Rutas de la API para usuarios
├── package.json                 # Configuración del proyecto y dependencias
├── package-lock.json            # Lock de dependencias
└── README.md                    # Este archivo
```

## 👨‍🎓 Créditos del Autor
- **Nombre del estudiante**: Alberto Hilal
- **Curso**: Desarrollo de Aplicaciones con Node.js
- **Unidad**: Clase 3 - Tarea

## 📚 Bibliografía Utilizada y Sugerida

### Libros y otros manuscritos
- Cantelon, M.; Harter, B.; Holowaychuk, T. y Rajlich, N. *Node.js in Action* [Node.js en acción]. 2ª ed. Manning; 2017.
- Holesovsky, P. *Mastering Mongoose*. Leanpub; 2020.

### Artículos y documentación en línea
- Express. (s.f.). *Routing* [Enrutamiento]. https://expressjs.com/en/guide/routing.html