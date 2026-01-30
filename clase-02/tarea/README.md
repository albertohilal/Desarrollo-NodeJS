# API REST de Gestión de Libros - Express.js

## 📖 Descripción

API REST desarrollada con Express.js para la gestión de una biblioteca de libros. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un catálogo de libros almacenado en memoria.

El proyecto implementa endpoints para:
- Listar todos los libros
- Obtener un libro específico por ID
- Crear nuevos libros
- Actualizar información de libros existentes
- Eliminar libros del catálogo

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js (versión 18 o superior)
- npm (Node Package Manager)

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
```bash
git clone https://github.com/albertohilal/Desarrollo-NodeJS.git
cd Desarrollo-NodeJS/clase-02/tarea
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar el servidor**
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### Modo de desarrollo

El proyecto está configurado con `--watch` para reiniciar automáticamente al detectar cambios:
```bash
npm run dev
```

## 📡 Endpoints de la API

### `GET /`
Endpoint de bienvenida
- **Respuesta**: `{ message: "Bienvenido a la API de libros", status: "ok" }`

### `GET /libros`
Obtiene todos los libros del catálogo
- **Respuesta**: Array con todos los libros

### `GET /libros/:id`
Obtiene un libro específico por su ID
- **Parámetro**: `id` (número)
- **Respuesta exitosa (200)**: Libro encontrado
- **Respuesta de error (404)**: Libro no encontrado

### `POST /libros`
Crea un nuevo libro
- **Body (JSON)**:
  ```json
  {
    "title": "Título del libro",
    "author": "Nombre del autor",
    "price": 29.99,
    "stock": 10,
    "category": "Categoría"
  }
  ```
- **Campos obligatorios**: `title`, `author`, `price`, `category`
- **Campo opcional**: `stock` (por defecto: 0)
- **Respuesta (201)**: Libro creado con ID generado automáticamente

### `PUT /libros/:id`
Actualiza un libro existente
- **Parámetro**: `id` (número)
- **Body (JSON)**: Campos a actualizar (parciales o completos)
- **Respuesta exitosa (200)**: Libro actualizado
- **Respuesta de error (404)**: Libro no encontrado

### `DELETE /libros/:id`
Elimina un libro del catálogo
- **Parámetro**: `id` (número)
- **Respuesta exitosa (200)**: Libro eliminado
- **Respuesta de error (404)**: Libro no encontrado

## 🗂️ Estructura del Proyecto

```
tarea/
├── src/
│   └── server.js          # Servidor Express con todos los endpoints
├── package.json           # Configuración del proyecto y dependencias
├── package-lock.json      # Lock de dependencias
└── README.md             # Este archivo
```

## 👨‍💻 Créditos

**Autor**: Alberto Hilal  
**Curso**: Desarrollo Backend con Node.js  
**Institución**: UTN Buenos Aires - Centro de e-Learning  
**Unidad**: Módulo 1 - Unidad 2: Express.js  
**Fecha**: Enero 2026

## 📚 Fuentes y Referencias

### Documentación Oficial
- **Express.js Documentation** - [https://expressjs.com/](https://expressjs.com/)
- **Node.js Documentation** - [https://nodejs.org/docs/](https://nodejs.org/docs/)

### Material del Curso
- Material didáctico: "M1 U2 Express.js" - UTN Buenos Aires
- Consigna de la tarea: "tarea-2 - Express.js" - UTN Buenos Aires

### Recursos Complementarios
- MDN Web Docs - HTTP Methods: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- REST API Best Practices: [https://restfulapi.net/](https://restfulapi.net/)

---

**Nota**: Este proyecto es con fines educativos y forma parte de las actividades prácticas del curso de Desarrollo Backend con Node.js de la UTN Buenos Aires.
