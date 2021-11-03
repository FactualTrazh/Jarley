'use strict';

const readeds = require('./readeds.js');

const eventsCache = {};

for (const _file of readeds.events) {

    const commands = readeds.commands.filter((v) => v.events[_file.name]);
    const services = readeds.services.filter((v) => v.events[_file.name]);
    const all      = commands.concat(services);

    // Salta la carga si el evento no es requido
    if (!all.length) continue;

    // Carga el evento
    eventsCache[_file.name] = { commands, services, all };
};

// Exporta los eventos
module.exports = eventsCache;