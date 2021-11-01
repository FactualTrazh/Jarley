'use strict';

const readeds = require('./readeds.js');

const eventsCache = {};

for (const _file of readeds.events) {

    const commands = readeds.commands.filter((_value) => _value.events[_file.name]);
    const services = readeds.services.filter((_value) => _value.events[_file.name]);
    const all      = commands.concat(services);
        
    // Verifica si el evento es requerido
    if (all.length) {

        // Exporta el evento
        eventsCache[_file.name] = {

            commands: commands,
            services: services,
            all:      all
        };
    };
};

// Exporta los eventos
module.exports = eventsCache;