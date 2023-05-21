const { Router } = require('express');
const { createCliente, getClientes, updateCliente } = require('../controllers/cliente');

const router = Router();

// Crear
router.post('/', createCliente);

// Editar
router.put('/:id', updateCliente);

// Listar
router.get('/', getClientes);

module.exports = router;
