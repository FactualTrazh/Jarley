'use strict';

const fs   = require('fs');
const path = require('path');

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

    // Crea la ruta exacta del archivo
    const filePath = path.join(directories.commands.inputs, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name              = _folder;
    content.description     ??= 'Descripcion no especificada';
    content.type              = 'CHAT_INPUT';
    content.defaultPermission = true;
    content.options         ??= [];

    content.intents ??= [];
    content.flags   ??= [];
    content.events  ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.description       = content.description;
    content.schema.options           = content.options;
    content.schema.type              = content.type;
    content.schema.defaultPermission = content.defaultPermission;

    // Exporta el contenido
    loadeds.commands.push(content);

    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los comandos de mensajes
for (const _folder of folders.commands.messages) {
    
    // Crea la ruta exacta del archivo
    const filePath = path.join(directories.commands.messages, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name              = _folder;
    content.type              = 'MESSAGE';
    content.defaultPermission = true;

    content.intents ??= [];
    content.flags   ??= [];
    content.events  ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = content.type;
    content.schema.defaultPermission = content.defaultPermission;

    // Exporta el contenido
    loadeds.commands.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los comandos de usuarios
for (const _folder of folders.commands.users) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(directories.commands.messages, _folder, 'main.js');
    
    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name              = _folder;
    content.type              = 'USER';
    content.defaultPermission = true;

    content.intents ??= [];
    content.flags   ??= [];
    content.events  ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = content.type;
    content.schema.defaultPermission = content.defaultPermission;

    // Exporta el contenido
    loadeds.commands.push(content);

    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los eventos
for (const _folder of folders.events) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(directories.events, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;

    content.intents ??= [];
    content.flags   ??= [];
    content.event   ??= function () {};

    // Exporta el contenido
    loadeds.events.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los servicios
for (const _folder of folders.services) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(directories.services, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;

    content.intents ??= [];
    content.flags   ??= [];
    content.events  ??= {};

    // Exporta el contenido
    loadeds.services.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Exporta los archivos cargados
module.exports = loadeds;