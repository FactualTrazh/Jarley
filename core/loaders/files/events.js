'use strict';

const readeds = require('./readeds.js');

const eventsCache = {};

for (const _file of readeds.events) {

    const commands = readeds.commands.filter((v) => v.events[_file.name]);
    const services = readeds.services.filter((v) => v.events[_file.name]);
    const all      = commands.concat(services);

    // Verifica si el evento es requerido
    if (all.length > 0) {

        // Carga el evento
        eventsCache[_file.name] = {
    
            command: commands,
            service: services,
            all:     all
        };
    };
};

// Exporta los eventos
module.exports = eventsCache;