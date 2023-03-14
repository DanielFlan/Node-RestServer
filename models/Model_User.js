const { Schema, model } = require('mongoose');

const UserSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre del usuario debe ser ingresado']
    },
    correo: {
        type: String,
        required: [true, 'El correo del usuario debe ser ingresado'],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, 'La contraseña del usuario debe ser ingresada']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true
    }
});

module.exports = {

}