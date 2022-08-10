const mongoose = require('mongoose');
const {appConfig} = require('../config')

const Schema = mongoose.Schema
const EstacionSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'Una estacion debe de tener un nombre']
    },
})

module.exports = mongoose.model('Estacion', EstacionSchema)

