const Universidad = require('../models/universidad');
const { request, response } = require('express');

const createUniversidad = async (req = request, res = response) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    const universidad = new Universidad({ nombre, direccion, telefono });
    await universidad.save();

    return res.status(201).json(universidad);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const updateUniversidad = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;

    const universidad = await Universidad.findById(id);

    if (!universidad) {
      return res.status(404).json({ msg: 'Universidad no encontrada' });
    }

    universidad.nombre = nombre || universidad.nombre;
    universidad.direccion = direccion || universidad.direccion;
    universidad.telefono = telefono || universidad.telefono;
    universidad.fechaActualizacion = new Date();

    await universidad.save();

    return res.json(universidad);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const getUniversidades = async (req = request, res = response) => {
  try {
    const universidades = await Universidad.find({});
    return res.json(universidades);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

module.exports = { createUniversidad, getUniversidades, updateUniversidad };
