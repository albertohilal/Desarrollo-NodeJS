import express from 'express';
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../repository/user.repository.js';

const userRouter = express.Router();

// Crear un nuevo usuario
userRouter.post(
  '/',
  async (req, res) => {
    const { name, email, age } = req.body;

    // Validación de datos
    if (!name || !email || !age) {
      return res.status(400).json({
        ok: false,
        status: 400,
        message: 'Todos los campos (name, email, age) son obligatorios',
      });
    }

    if (typeof age !== 'number' || age < 18) {
      return res.status(400).json({
        ok: false,
        status: 400,
        message: 'La edad debe ser un número mayor o igual a 18',
      });
    }

    try {
      const user = await createUser(req.body);
      res.status(201).json({
        ok: true,
        status: 201,
        message: 'Usuario creado exitosamente',
        data: { user },
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        status: 400,
        message: error.message,
      });
    }
  }
);

// Obtener todos los usuarios
userRouter.get('/', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      ok: true,
      status: 200,
      message: 'Usuarios obtenidos exitosamente',
      data: { users },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message,
    });
  }
});

// Obtener un usuario por ID
userRouter.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        ok: false,
        status: 404,
        message: 'Usuario no encontrado',
      });
    }
    res.json({
      ok: true,
      status: 200,
      message: 'Usuario obtenido exitosamente',
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message,
    });
  }
});

// Actualizar un usuario por ID
userRouter.put('/:id', async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({
        ok: false,
        status: 404,
        message: 'Usuario no encontrado',
      });
    }
    res.json({
      ok: true,
      status: 200,
      message: 'Usuario actualizado exitosamente',
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      status: 400,
      message: error.message,
    });
  }
});

// Eliminar un usuario por ID
userRouter.delete('/:id', async (req, res) => {
  try {
    const user = await deleteUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        ok: false,
        status: 404,
        message: 'Usuario no encontrado',
      });
    }
    res.json({
      ok: true,
      status: 200,
      message: 'Usuario eliminado exitosamente',
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      status: 500,
      message: error.message,
    });
  }
});

export default userRouter;