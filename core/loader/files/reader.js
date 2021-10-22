'use strict';

const fs = require('fs');

const dirs = require('./dirs.js');

///////////////////////
////// Variables //////
///////////////////////

const files = {

    commands: {

        inputs:   fs.readdirSync(dirs.commands.inputs, 'utf-8').filter((x) => !x.startsWith('.')),
        messages: fs.readdirSync(dirs.commands.messages, 'utf-8').filter((x) => !x.startsWith('.')),
        users:    fs.readdirSync(dirs.commands.users, 'utf-8').filter((x) => !x.startsWith('.'))
    },
    
    services: fs.readdirSync(dirs.services, 'utf-8').filter((x) => !x.startsWith('.')),
    events:   fs.readdirSync(dirs.events, 'utf-8').filter((x) => !x.startsWith('.'))
};

const loadeds = {

    commands: [],
    services: [],
    events:   []
};

///////////////////
////// Carga //////
///////////////////

// Carga los comandos de entrada
for (const inFolder of files.commands.inputs) {

    // Carga el contenido
    const content = require(`${dirs.commands.inputs}/${inFolder}/main.js`);

    // Configura los valores
    content.name          = inFolder;
    content.description ??= 'Descripcion no especificada';
    content.type          = 'CHAT_INPUT';
    content.options     ??= [];
    content.intents     ??= [];

    // Configura los valores extras
    content.show           ??= {};
    content.show.name        = content.name;
    content.show.description = content.description;
    content.show.options     = content.options;
    content.show.type        = content.type;

    content.priority ??= false;
    content.events   ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los comandos de mensajes
for (const inFolder of files.commands.messages) {

    // Carga el contenido
    const content = require(`${dirs.commands.messages}/${inFolder}/main.js`);

    // Configura los valores
    content.name      = inFolder;
    content.type      = 'MESSAGE';
    content.intents ??= [];

    // Configura los valores extras
    content.show    ??= {};
    content.show.name = content.name;
    content.show.type = content.type;

    content.priority ??= false;
    content.events   ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los comandos de usuarios
for (const inFolder of files.commands.users) {

    // Carga el contenido
    const content = require(`${dirs.commands.users}/${inFolder}/main.js`);

    // Configura los valores
    content.name      = inFolder;
    content.type      = 'USER';
    content.intents ??= [];

    // Configura los valores extras
    content.priority ??= false;

    content.show    ??= {};
    content.show.name = content.name;
    content.show.type = content.type;
    content.events  ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los services
for (const inFolder of files.services) {

    // Carga el contenido
    const content = require(`${dirs.services}/${inFolder}/main.js`);

    // Configura los valores
    content.name      = inFolder;
    content.intents ??= [];

    // Configura los valores extras
    content.priority ??= false;
    content.events   ??= {};

    // Exporta el contenido
    loadeds.services.push(content);
};

// Carga los eventos
for (const inFolder of files.events) {

    // Carga el contenido del archivo
    const content = require(`${dirs.events}/${inFolder}/main.js`);

    // Configura los valores
    content.name      = inFolder;
    content.intents ??= [];

    // Configura los valores extras
    content.priority ??= false;
    content.event    ??= function () {};

    // Exporta el contenido
    loadeds.events.push(content);
};

/////////////////////
////// Gestion //////
/////////////////////

// Ordena los archivos por prioridad
for (const inLoaded in loadeds) {

    const yes = loadeds[inLoaded].filter((x) => x.priority);
    const no  = loadeds[inLoaded].filter((x) => !x.priority);

    loadeds[inLoaded] = yes.concat(no);
};

// Exporta los archivos
module.exports = loadeds;