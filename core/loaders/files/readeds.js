'use strict';

const fs = require('fs');

const directories = require('./directories.js');

const folders = {

    commands: {

        inputs:   fs.readdirSync(directories.commands.inputs).filter((x) => !x.startsWith('.')),
        messages: fs.readdirSync(directories.commands.messages).filter((x) => !x.startsWith('.')),
        users:    fs.readdirSync(directories.commands.users).filter((x) => !x.startsWith('.'))
    },

    events:   fs.readdirSync(directories.events).filter((x) => !x.startsWith('.')),
    services: fs.readdirSync(directories.services).filter((x) => !x.startsWith('.'))
};

const loadeds = {

    commands: [],
    events:   [],
    services: []
};

// Carga los comandos de entradas
for (const _folder of folders.commands.inputs) {

    // Carga el contenido
    const content = require(`${directories.commands.inputs}/${_folder}/main.js`);

    // Configura el contenido
    content.name          = _folder;
    content.description ??= 'Descripcion no especificada';
    content.options     ??= [];
    content.intents     ??= [];
    content.flags       ??= [];

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.description       = content.description;
    content.schema.options           = content.options;
    content.schema.type              = 'CHAT_INPUT';
    content.schema.defaultPermission = true;

    content.events ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los comandos de mensajes
for (const _folder of folders.commands.messages) {

    // Carga el contenido
    const content = require(`${directories.commands.messages}/${_folder}/main.js`);

    // Configura el contenido
    content.name      = _folder;
    content.intents ??= [];
    content.flags   ??= [];

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'MESSAGE';
    content.schema.defaultPermission = true;

    content.events ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los comandos de usuarios
for (const _folder of folders.commands.users) {

    // Carga el contenido
    const content = require(`${directories.commands.users}/${_folder}/main.js`);

    // Configura el contenido
    content.name      = _folder;
    content.intents ??= [];
    content.flags   ??= [];

    // Configura el contenido extra
    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'USER';
    content.schema.defaultPermission = true;

    content.events ??= {};

    // Exporta el contenido
    loadeds.commands.push(content);
};

// Carga los eventos
for (const _folder of folders.events) {

    // Carga el contenido
    const content = require(`${directories.events}/${_folder}/main.js`);

    // Configura el contenido
    content.name      = _folder;
    content.intents ??= [];
    content.flags   ??= [];

    content.event ??= function () {};

    // Exporta el contenido
    loadeds.events.push(content);
};

// Carga los servicios
for (const _folder of folders.services) {

    // Carga el contenido
    const content = require(`${directories.services}/${_folder}/main.js`);

    // Configura el contenido
    content.name      = _folder;
    content.intents ??= [];
    content.flags   ??= [];

    content.events ??= {};

    // Exporta el contenido
    loadeds.services.push(content);
};

// Exporta los archivos cargados
module.exports = loadeds;