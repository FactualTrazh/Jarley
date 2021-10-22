'use strict';

const reader = require('./reader.js');

const loadeds = {};

for (const inFile of reader.events) {

    const commands = reader.commands.filter((x) => x.events[inFile.name]);
    const services = reader.services.filter((x) => x.events[inFile.name]);
    const all      = commands.concat(services);

    loadeds[inFile.name] = {

        commands: commands,
        services: services,
        all:      all
    };
};

// Exporta los eventos
module.exports = loadeds;