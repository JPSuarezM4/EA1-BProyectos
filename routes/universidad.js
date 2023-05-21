const { Router } = require('express');
const { createUniversidad, getUniversidades, updateUniversidad } = require('../controllers/universidad');

const router = Router();

// Crear
router.post('/', createUniversidad);

// Editar
router.put('/:id', updateUniversidad);

// Listar
router.get('/', getUniversidades);

module.exports = router;
