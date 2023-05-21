const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express');

/**
 * Creación
 */
const createTipoProyecto = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : '';
    const tipoProyectoBD = await TipoProyecto.findOne({ nombre });

    if (tipoProyectoBD) {
      return res.status(400).json({ msg: 'Ya existe el tipo de proyecto' });
    }

    const data = {
      nombre
    };

    const tipoProyecto = new TipoProyecto(data);
    await tipoProyecto.save();

    return res.status(201).json(tipoProyecto);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

/**
 * Actualización
 */
const updateTipoProyecto = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const tipoProyecto = await TipoProyecto.findById(id);

    if (!tipoProyecto) {
      return res.status(404).json({ msg: 'Tipo de proyecto no encontrado' });
    }

    tipoProyecto.nombre = nombre ? nombre.toUpperCase() : tipoProyecto.nombre;
    tipoProyecto.fechaActualizacion = new Date();

    await tipoProyecto.save();

    return res.json(tipoProyecto);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

/**
 * Listar Todos
 */
const getTipoProyectos = async (req = request, res = response) => {
  try {
    const tipoProyectosDB = await TipoProyecto.find({});
    return res.json(tipoProyectosDB);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

module.exports = { createTipoProyecto, getTipoProyectos, updateTipoProyecto };
