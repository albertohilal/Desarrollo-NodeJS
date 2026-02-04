import connectDB from "./config/connectionDB.js";
import { buscarTodosLosProductos, buscarProductoPorId, createProduct } from "./repository/product.repository.js";

await connectDB()


import express from 'express'
import ENVIRONMENT from "./config/environment.js";
import productRouter from "./routes/product.router.js";

//Crea nuestro web server
const app = express()

//Nuestra API puede recibir datos en formato JSON
app.use(express.json())

// La lógica de interacción con la base de datos se ha movido al archivo product.repository.js
// para mantener una mejor organización y separación de responsabilidades.
// Aquí simplemente utilizamos las funciones definidas en el repositorio para realizar las operaciones.

// Ruta para obtener todos los productos
app.get('/api/products', async (request, response) => {
    // Llamamos a la función buscarTodosLosProductos del repositorio
    const products = await buscarTodosLosProductos();
    response.json({
        ok: true,
        status: 200,
        message: 'Productos obtenidos exitosamente',
        data: {
            products,
        },
    });
});

// Ruta para obtener un producto por ID
app.get('/api/products/:id', async (request, response) => {
    // Llamamos a la función buscarProductoPorId del repositorio
    const { id } = request.params;
    const product = await buscarProductoPorId(id);
    if (!product) {
        return response.json({
            ok: false,
            status: 404, // 404 significa no encontrado
            message: 'Producto no encontrado',
        });
    }
    response.json({
        ok: true,
        status: 200,
        message: 'Producto obtenido exitosamente',
        data: {
            product,
        },
    });
});

// Ruta para crear un producto
app.post('/api/products', async (request, response) => {
    // Llamamos a la función createProduct del repositorio
    const { title, price, stock, description } = request.body;
    const product = await createProduct(title, price, stock, description);
    response.json({
        ok: true,
        status: 201, // 201 significa creado
        message: 'Producto creado exitosamente',
        data: {
            product,
        },
    });
});

app.listen(
    ENVIRONMENT.PORT,
    () => {
        console.log(`Servidor escuchando en el puerto ${ENVIRONMENT.PORT}`)
    }
)