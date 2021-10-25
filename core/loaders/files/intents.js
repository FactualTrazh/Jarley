'use strict';

const discord = require('discord.js');

const readeds = require('./readeds.js');

const loadeds = [

    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_PRESENCES
];

const files = readeds.commands.concat(readeds.services).concat(readeds.events);

for (const _file of files) {

    for (const _intent of _file.intents) {

        // Agrega el intent a la cache
        loadeds.push(_intent);
    };
};

// Exporta los intents
module.exports = loadeds;