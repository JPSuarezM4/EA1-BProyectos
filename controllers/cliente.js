const Cliente = require('../models/cliente');
const { request, response } = require('express');

const createCliente = async (req = request, res = response) => {
  try {
    const { nombre, email } = req.body;

    const clienteBD = await Cliente.findOne({ email });

    if (clienteBD) {
      return res.status(400).json({ msg: 'El cliente ya existe' });
    }

    const cliente = new Cliente({ nombre, email });
    await cliente.save();

    return res.status(201).json(cliente);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const updateCliente = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;

    const cliente = await Cliente.findById(id);

    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente no encontrado' });
    }

    cliente.nombre = nombre || cliente.nombre;
    cliente.email = email || cliente.email;
    cliente.fechaActualizacion = new Date();

    await cliente.save();

    return res.json(cliente);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

const getClientes = async (req = request, res = response) => {
  try {
    const clientes = await Cliente.find({});
    return res.json(clientes);
  } catch (e) {
    return res.status(500).json({ msg: e });
  }
};

module.exports = { createCliente, getClientes, updateCliente };
