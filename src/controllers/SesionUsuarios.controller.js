import { token } from "morgan";
import usuarioModel from "../models/sesionUsuarios.model";
import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const headertoken = req.headers['authorization'];
    if (typeof headertoken !== 'undefined') {
        const token = headertoken;
        req.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
}

export const findAllUsuario = async (req, res) => {
    try {
        const usuarios = await usuarioModel.find({});
        res.json({ usuarios });
    } catch (error) {
        console.error(error);
        res.sendStatus(500).json({
            message: "Something went wrong while fetching the users"
        });
    }
}

export const findOneUsuario = async (req, res) => {
    const usuario = await usuarioModel.findOne({ usuario: req.body.usuario, contrasenha: req.body.contrasenha })
    if (await usuario) {
        jwt.sign({ usuario }, 'secretKey', (error, token) => {
            res.json({
                token
            })
        });
    }
}

export const createUsuario = async (req, res) => {
    const newUsuario = new usuarioModel({ usuario: req.body.usuario, contrasenha: req.body.contrasenha })
    const usuarioSave = await newUsuario.save();
    res.json({ usuarioSave });
}

export const deleteUsuario = async (req, res) => {
    await usuarioModel.findOneAndDelete({ usuario: req.body.usuario, contrasenha: req.body.contrasenha })
    res.json({
        message: `${req.params.id} were deleted successfully`
    })
}

export const updateUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await usuarioModel.findOneAndUpdate(
            { usuario: req.body.usuario, contrasenha: req.body.contrasenha },
            { contrasenha: req.body.newContrasenha },
            { new: true }
        );
        if (usuarioActualizado) {
            res.sendStatus(205);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
};