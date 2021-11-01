'use strict';

const readeds = require('./readeds.js');

const eventsCache = {};

for (const _file of readeds.events) {

    const commands = readeds.commands.filter((v) => v.events[_file.name]);
    const services = readeds.services.filter((v) => v.events[_file.name]);
    const all      = commands.concat(services);

     // Salta la carga si el evento no es requerido
    if (!all.length > 0) continue;

    // Carga el evento
    eventsCache[_file.name] = {

        commands: commands,
        services: services,
        all:      all
    };
};

// Exporta los eventos
module.exports = eventsCache;