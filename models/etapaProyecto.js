const { Schema, model } = require('mongoose');

const EtapaProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('EtapaProyecto', EtapaProyectoSchema);
