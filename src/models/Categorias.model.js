import {Schema, model, version} from "mongoose";

const CategoriasShema = new Schema ({
    codigo: {
        type: String,
        unique: true,
        required: [true, 'El campo codigo es requrido'],
        trim: true
    }, nombre: {
        type: String,
        unique: false,
        required: [true, 'El campo nombre es requrido'],
        trim: true
    }, 
},{
    versionKey: false,
    timestamps: true
})

export default model('categorias', CategoriasShema)