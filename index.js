let discord = require('discord.js');
let dotenv  = require('dotenv');

let loaders = require('./core/loaders/exports.js');

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
let client = new discord.Client({

    intents:  loaders.intents,
    partials: loaders.partials,
    allowedMentions: { parse: [] }
});

// Carga los archivos
require('./core/boot.js')(client);

// Conecta el cliente
client.login(process.env.token)
.then(() => console.log('Conexion establecida'))
.catch((err) => {

    console.log('Conexion fallida');
    console.log();
    console.log(err);
});