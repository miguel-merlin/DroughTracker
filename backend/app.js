const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const estacionRoutes = require('./routes/estaciones');
const AppError = require('./utils/appError')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/v1',estacionRoutes)

app.all('*', (req, res, next) => {
    next( new AppError(`Cannot find ${req.originalUrl} on this server`, 404))
});

module.exports = app;
