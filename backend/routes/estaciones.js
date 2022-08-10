const express = require('express');
const {addEstacion, getAllEstaciones} = require('../controllers/estacionController');
const api = express.Router()

api.post('/estacion', addEstacion); //Add estacion
api.get('/estacion', getAllEstaciones) //Get all estaciones

module.exports = api