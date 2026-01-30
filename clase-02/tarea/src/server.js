import express from 'express';

// Crear aplicación de Express
const app = express()
const PORT = 3000

// Middleware para procesar JSON
app.use(express.json())

// Array de libros inicial
const libros = [
    {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 29.99,
        stock: 15,
        id: 1,
        category: 'JavaScript'
    },
    {
        title: 'Node.js Design Patterns',
        author: 'Mario Casciaro',
        price: 45.50,
        stock: 8,
        id: 2,
        category: 'Node.js'
    },
    {
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        price: 35.00,
        stock: 12,
        id: 3,
        category: 'JavaScript'
    },
    {
        title: 'Learning Node.js Development',
        author: 'Andrew Mead',
        price: 39.99,
        stock: 10,
        id: 4,
        category: 'Node.js'
    },
    {
        title: 'You Don\'t Know JS',
        author: 'Kyle Simpson',
        price: 42.75,
        stock: 20,
        id: 5,
        category: 'JavaScript'
    }
]

// Endpoint raíz
app.get(
    '/',
    (request, response) => {
        response.send({
            message: 'Bienvenido a la API de libros',
            status: 'ok'
        })
    }
)

// GET /libros - Obtener todos los libros
app.get(
    '/libros',
    (request, response) => {
        response.send({
            ok: true,
            libros: libros
        })
    }
)

// GET /libros/:id - Obtener un libro por ID
app.get(
    '/libros/:id',
    (request, response) => {
        const { id } = request.params
        const libro = libros.find(lib => lib.id === Number(id))
        
        if (!libro) {
            return response.status(404).send({
                ok: false,
                message: 'Libro no encontrado'
            })
        }
        
        response.send({
            ok: true,
            libro: libro
        })
    }
)

// POST /libros - Crear un nuevo libro
app.post(
    '/libros',
    (request, response) => {
          const { 
            title, 
            author, 
            price, 
            stock, 
            category 
            } = request.body
        
        // Validaciones
        if (!title || !author || !price || !category) {
            return response.status(400).send({
                ok: false,
                message: 'Faltan datos requeridos: title, author, price, category'
            })
        }
        
        const new_libro = {
            title,
            author,
            price: Number(price),
            stock: stock !== undefined ? Number(stock) : 0,
            category,
            id: libros.length > 0 ? Math.max(...libros.map(l => l.id)) + 1 : 1
        }
        
        libros.push(new_libro)
        
        response.status(201).send({
            ok: true,
            message: 'Libro creado exitosamente',
            libro: new_libro
        })
    }
)

// PUT /libros/:id - Actualizar un libro existente
app.put(
    '/libros/:id',
    (request, response) => {
        const { id } = request.params
        const { title, author, price, stock, category } = request.body
        
        const libroIndex = libros.findIndex(lib => lib.id === Number(id))
        
        if (libroIndex === -1) {
            return response.status(404).send({
                ok: false,
                message: 'Libro no encontrado'
            })
        }
        
        // Actualizar solo los campos que se envíen
        if (title !== undefined) libros[libroIndex].title = title
        if (author !== undefined) libros[libroIndex].author = author
        if (price !== undefined) libros[libroIndex].price = Number(price)
        if (stock !== undefined) libros[libroIndex].stock = Number(stock)
        if (category !== undefined) libros[libroIndex].category = category
        
        response.send({
            ok: true,
            message: 'Libro actualizado exitosamente',
            libro: libros[libroIndex]
        })
    }
)

// DELETE /libros/:id - Eliminar un libro
app.delete(
    '/libros/:id',
    (request, response) => {
        const { id } = request.params
        const libroIndex = libros.findIndex(lib => lib.id === Number(id))
        
        if (libroIndex === -1) {
            return response.status(404).send({
                ok: false,
                message: 'Libro no encontrado'
            })
        }
        
        const libroEliminado = libros.splice(libroIndex, 1)[0]
        
        response.send({
            ok: true,
            message: 'Libro eliminado exitosamente',
            libro: libroEliminado
        })
    }
)

// Iniciar servidor
app.listen(
    PORT,
    () => {
        console.log(`La aplicacion se esta ejecutando correctamente en puerto ${PORT}`)
    }
)
