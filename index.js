'use strict';

const discord = require('discord.js');
const loader  = require('./core/loader/export.js');
require('dotenv').config();

const client = new discord.Client({ 

    allowedMentions: { parse: [] },
    intents: loader.intents,
    partials: []
});

// Carga los archivos 
require('./core/boot.js')(client);

// Establecer conexion
console.log('Estableciendo conexion');

client.login(process.env.token)
.then(() => console.log('Conexion establecida'))
.catch((err) => {

    console.log('Conexion fallida');

    throw err;
});