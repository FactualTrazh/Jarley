const fs   = require('fs');
const path = require('path');

const paths = {

    applications: {

        commands: path.join(__dirname, '../../../applications/commands'),
        messages: path.join(__dirname, '../../../applications/messages'),
        users:    path.join(__dirname, '../../../applications/users')
    },

    events:   path.join(__dirname, '../../../events'),
    services: path.join(__dirname, '../../../services')
};

const folders = {

    applications: {

        commands: fs.readdirSync(paths.applications.commands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(paths.applications.messages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(paths.applications.users).filter((val) => !val.startsWith('.'))
    },

    events:   fs.readdirSync(paths.events).filter((val) => !val.startsWith('.')),
    services: fs.readdirSync(paths.services).filter((val) => !val.startsWith('.'))
};

const cache = {

    applications: [],
    events:       [],
    services:     []
};

// Carga las aplicaciones del tipo comando
for (const _folder of folders.applications.commands) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.commands, _folder, 'main.js');

    // Carga el contenido
    const content = require(file);

    // Configura el contenido
    content.name          = _folder;
    content.type          = 'command';
    content.description ??= 'No especificada';
    content.options     ??= [];

    content.priority ??= false;
    content.users    ??= false;
    content.servers  ??= false;
    content.hide     ??= false;

    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.description       = content.description;
    content.schema.options           = content.options;
    content.schema.type              = 'CHAT_INPUT';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    cache.applications.push(content);

    // Elimina el archivo de la cache
    delete require.cache[file];
};

// Carga las aplicaciones del tipo mensaje
for (const _folder of folders.applications.messages) {
    
    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.messages, _folder, 'main.js');

    // Carga el contenido
    const content = require(file);

    // Configura el contenido
    content.name = _folder;
    content.type = 'message';

    content.priority ??= false;
    content.users    ??= false;
    content.servers  ??= false;
    content.hide     ??= false;

    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'MESSAGE';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    cache.applications.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[file];
};

// Carga las aplicaciones del tipo usuario
for (const _folder of folders.applications.users) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.applications.users, _folder, 'main.js');
    
    // Carga el contenido
    const content = require(file);

    // Configura el contenido
    content.name = _folder;
    content.type = 'user';

    content.priority ??= false;
    content.users    ??= false;
    content.servers  ??= false;
    content.hide     ??= false;

    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    content.schema                   = {};
    content.schema.name              = content.name;
    content.schema.type              = 'USER';
    content.schema.defaultPermission = true;

    // Exporta el contenido
    cache.applications.push(content);

    // Elimina el archivo de la cache
    delete require.cache[file];
};

// Carga los eventos
for (const _folder of folders.events) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.events, _folder, 'main.js');

    // Carga el contenido
    const content = require(file);

    // Configura el contenido
    content.name = _folder;

    content.priority ??= false;

    content.intents  ??= [];
    content.partials ??= [];
    content.event    ??= function () {};

    // Exporta el contenido
    cache.events.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[file];
};

// Carga los servicios
for (const _folder of folders.services) {

    // Genera la ruta exacta del archivo
    const file = path.join(paths.services, _folder, 'main.js');

    // Carga el contenido
    const content = require(file);

    // Configura el contenido
    content.name = _folder;

    content.priority ??= false;
    
    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    // Exporta el contenido
    cache.services.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[file];
};

// Controlador de prioridades
for (const _cache in cache) {

    const on  = cache[_cache].filter((val) => val.priority);
    const off = cache[_cache].filter((val) => !val.priority);

    cache[_cache] = on.concat(off);
};

// Controlador de intentos
for (const _cache in cache) {

    for (const _file of cache[_cache]) {

        const intents = [];

        for (const _intent of _file.intents) {

            if (intents.includes(_intent)) continue;

            intents.push(_intent);
        };

        _file.intents = intents;
    };
};

// Controlador de parciales
for (const _cache in cache) {

    for (const _file of cache[_cache]) {

        const partials = [];

        for (const _partial of _file.partials) {

            if (partials.includes(_partial)) continue;

            partials.push(_partial);
        };

        _file.partials = partials;
    };
};

// Exporta los archivos cargados
module.exports = cache;