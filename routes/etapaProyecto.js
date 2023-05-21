const { Router } = require('express');
const { createEtapaProyecto, getEtapaProyectos, updateEtapaProyecto } = require('../controllers/etapaProyecto');

const router = Router();

// Crear
router.post('/', createEtapaProyecto);

// Editar
router.put('/:id', updateEtapaProyecto);

// Listar
router.get('/', getEtapaProyectos);

module.exports = router;
