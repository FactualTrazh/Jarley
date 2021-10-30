'use strict';

const readeds = require('./readeds.js');

const loadeds = {};

for (const _file of readeds.events) {

    const commands = readeds.commands.filter((x) => x.events[_file.name]);
    const services = readeds.services.filter((x) => x.events[_file.name]);
    const all      = commands.concat(services);
        
    // Exporta el evento
    loadeds[_file.name] = {

        commands: commands,
        services: services,
        all:      all
    };
};

// Exporta los eventos
module.exports = loadeds;