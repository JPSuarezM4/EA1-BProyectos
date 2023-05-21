const { Router } = require('express');
const { createTipoProyecto, getTipoProyectos, updateTipoProyecto } = require('../controllers/tipoProyecto');

const router = Router();

// Crear
router.post('/', createTipoProyecto);

// Editar
router.put('/:id', updateTipoProyecto);

// Listar
router.get('/', getTipoProyectos);

module.exports = router;
