const EtapaProyecto = require('../models/etapaProyecto');
const { request, response } = require('express');

const createEtapaProyecto = async (req = request, res = response) => {
  try {
    const { nombre } = req.body;

    const etapaProyectoBD = await EtapaProyecto.findOne({ nombre });

    if (etapaProyectoBD) {
      return res.status(400).json({ msg: 'La etapa de proyecto ya existe' });
    }

    const etapaProyecto = new EtapaProyecto({ nombre });
    await etapaProyecto.save();

    return res.status(201).json(etapaProyecto);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const updateEtapaProyecto = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const etapaProyecto = await EtapaProyecto.findById(id);

    if (!etapaProyecto) {
      return res.status(404).json({ msg: 'Etapa de proyecto no encontrada' });
    }

    etapaProyecto.nombre = nombre || etapaProyecto.nombre;
    etapaProyecto.fechaActualizacion = new Date();

    await etapaProyecto.save();

    return res.json(etapaProyecto);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const getEtapaProyectos = async (req = request, res = response) => {
  try {
    const etapaProyectos = await EtapaProyecto.find({});
    return res.json(etapaProyectos);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

module.exports = { createEtapaProyecto, getEtapaProyectos, updateEtapaProyecto };
