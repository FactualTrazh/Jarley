let fs   = require('fs');
let path = require('path');

let paths = {

    applications: {

        commands: path.join(__dirname, '../../../applications/commands'),
        messages: path.join(__dirname, '../../../applications/messages'),
        users:    path.join(__dirname, '../../../applications/users')
    },

    events:   path.join(__dirname, '../../../events'),
    services: path.join(__dirname, '../../../services')
};

let folders = {

    applications: {

        commands: fs.readdirSync(paths.applications.commands).filter((val) => !val.startsWith('.')),
        messages: fs.readdirSync(paths.applications.messages).filter((val) => !val.startsWith('.')),
        users:    fs.readdirSync(paths.applications.users).filter((val) => !val.startsWith('.'))
    },

    events:   fs.readdirSync(paths.events).filter((val) => !val.startsWith('.')),
    services: fs.readdirSync(paths.services).filter((val) => !val.startsWith('.'))
};

let cache = {

    applications: [],
    events:       [],
    services:     []
};

// Carga las aplicaciones del tipo comando
for (let _folder of folders.applications.commands) {

    // Genera la ruta exacta del archivo
    const FILE_PATH = path.join(paths.applications.commands, _folder, 'main.js');

    // Carga el contenido
    let content = require(FILE_PATH);

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
    delete require.cache[FILE_PATH];
};

// Carga las aplicaciones del tipo mensaje
for (let _folder of folders.applications.messages) {
    
    // Genera la ruta exacta del archivo
    const FILE_PATH = path.join(paths.applications.messages, _folder, 'main.js');

    // Carga el contenido
    let content = require(FILE_PATH);

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
    delete require.cache[FILE_PATH];
};

// Carga las aplicaciones del tipo usuario
for (let _folder of folders.applications.users) {

    // Genera la ruta exacta del archivo
    const FILE_PATH = path.join(paths.applications.users, _folder, 'main.js');
    
    // Carga el contenido
    let content = require(FILE_PATH);

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
    delete require.cache[FILE_PATH];
};

// Carga los eventos
for (let _folder of folders.events) {

    // Genera la ruta exacta del archivo
    const FILE_PATH = path.join(paths.events, _folder, 'main.js');

    // Carga el contenido
    let content = require(FILE_PATH);

    // Configura el contenido
    content.name = _folder;

    content.priority ??= false;

    content.intents  ??= [];
    content.partials ??= [];
    content.event    ??= function () {};

    // Exporta el contenido
    cache.events.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[FILE_PATH];
};

// Carga los servicios
for (let _folder of folders.services) {

    // Genera la ruta exacta del archivo
    const FILE_PATH = path.join(paths.services, _folder, 'main.js');

    // Carga el contenido
    let content = require(FILE_PATH);

    // Configura el contenido
    content.name = _folder;

    content.priority ??= false;
    
    content.intents  ??= [];
    content.partials ??= [];
    content.events   ??= {};

    // Exporta el contenido
    cache.services.push(content);
    
    // Elimina el archivo de la cache
    delete require.cache[FILE_PATH];
};

// Controlador de prioridades
for (let _cache in cache) {

    let on  = cache[_cache].filter((val) => val.priority);
    let off = cache[_cache].filter((val) => !val.priority);

    cache[_cache] = on.concat(off);
};

// Controlador de intentos
for (let _cache in cache) {

    for (let _file of cache[_cache]) {

        let intents = [];

        for (let _intent of _file.intents) {

            if (intents.includes(_intent)) continue;

            intents.push(_intent);
        };

        _file.intents = intents;
    };
};

// Controlador de parciales
for (let _cache in cache) {

    for (let _file of cache[_cache]) {

        let partials = [];

        for (let _partial of _file.partials) {

            if (partials.includes(_partial)) continue;

            partials.push(_partial);
        };

        _file.partials = partials;
    };
};

// Exporta los archivos cargados
module.exports = cache;