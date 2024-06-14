'use strict';

var mongoose = require('mongoose');
const cors = require('cors');

var app = require('./app')
var url = 'mongodb+srv://vicboltmadrid:IJXgDWBNSPQBhDcJ@rosanadb.mtxmv1m.mongodb.net/?retryWrites=true&w=majority&appName=RosanaDB';

app.use(cors({
    origin: '*', // Permite solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Permite cookies y encabezados de autorización
}));

mongoose.Promise = global.Promise;

mongoose.connect(url, { useNewUrlParser: true }).then(() =>{
    console.log('Success! DB Connected')

    app.listen(() =>{
        console.log('DB working in: ' + url)
    })
})


