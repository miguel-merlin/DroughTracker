const AppError = require('../utils/appError');
const Estacion = require('../models/Estacion');

async function addEstacion(req, res, next) {
    try {
        let estacionBool = await Estacion.findOne({nombre: req.body.nombre});

        if (estacionBool) {
            return next( new AppError('Ya existe una estacion con ese nombre', 400));
        }

        const {
            nombre
        } = req.body;

        const estacion = Estacion({
            nombre
        });

        const data = await estacion.save()
        res.status(201).send({data})

    } catch (error) {
        next(new AppError(`No se pudo cargar la estacion ${error}`, 500))
    }
}

async function getAllEstaciones(req, res) {
    const estaciones = await Estacion.find().lean().exec()
    res.status(201).send({estaciones})
}

module.exports = {
    addEstacion,
    getAllEstaciones,
}