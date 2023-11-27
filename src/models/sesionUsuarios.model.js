import mongoose, { Schema, model } from "mongoose";

const UsuariosSchema = new Schema({
    usuario: {
        type: String,
        unique: true,
        require: [true, 'El campo usuarios es requerido'],
        trim: true
    }, contrasenha: {
        type: String,
        unique: false,
        require: [true, 'El campo contraseña es requerido'],
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('usuarios', UsuariosSchema)