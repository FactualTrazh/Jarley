'use strict';

const fs   = require('fs');
const path = require('path');

const paths = require('./paths.js');

const folders = {

    commands: {

        inputs:   fs.readdirSync(paths.commands.inputs).filter((v) => !v.startsWith('.')),
        messages: fs.readdirSync(paths.commands.messages).filter((v) => !v.startsWith('.')),
        users:    fs.readdirSync(paths.commands.users).filter((v) => !v.startsWith('.'))
    },

    events:   fs.readdirSync(paths.events).filter((v) => !v.startsWith('.')),
    services: fs.readdirSync(paths.services).filter((v) => !v.startsWith('.'))
};

const filesCache = {

    commands: [],
    events:   [],
    services: []
};

// Carga los comandos de entradas
for (const _folder of folders.commands.inputs) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(paths.commands.inputs, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name          = _folder;
    content.type          = 'input';
    content.description ??= 'Descripcion no especificada';
    content.options     ??= [];

    content.intents  ??= [];
    content.partials ??= [];
    content.flags    ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.description       = content.description;
    content.schema.options           = content.options;
    content.schema.type              = 'CHAT_INPUT';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    filesCache.commands.push(content);

    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los comandos de mensajes
for (const _folder of folders.commands.messages) {
    
    // Crea la ruta exacta del archivo
    const filePath = path.join(paths.commands.messages, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;
    content.type = 'message';

    content.intents  ??= [];
    content.partials ??= [];
    content.flags    ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'MESSAGE';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    filesCache.commands.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los comandos de usuarios
for (const _folder of folders.commands.users) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(paths.commands.users, _folder, 'main.js');
    
    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;
    content.type = 'user';

    content.intents  ??= [];
    content.partials ??= [];
    content.flags    ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'USER';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    filesCache.commands.push(content);

    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los eventos
for (const _folder of folders.events) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(paths.events, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;

    content.intents  ??= [];
    content.partials ??= [];
    content.flags    ??= [];
    content.event    ??= function () {};

    // Exporta el contenido
    filesCache.events.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Carga los servicios
for (const _folder of folders.services) {

    // Crea la ruta exacta del archivo
    const filePath = path.join(paths.services, _folder, 'main.js');

    // Carga el contenido
    const content = require(filePath);

    // Configura el contenido
    content.name = _folder;

    content.intents  ??= [];
    content.partials ??= [];
    content.flags    ??= [];
    content.events   ??= {};

    // Exporta el contenido
    filesCache.services.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[filePath];
};

// Exporta los archivos cargados
module.exports = filesCache;