'use strict';

const discord = require('discord.js');
const reader  = require('./reader.js');

const loadeds = [

    discord.Intents.FLAGS.GUILDS,
    discord.Intents.FLAGS.GUILD_PRESENCES
];

const files = reader.commands.concat(reader.services).concat(reader.events);

for (const inFile of files) {

    for (const inIntent of inFile.intents) {

        loadeds.push(inIntent);
    };
};

// Exporta los intents
module.exports = loadeds;