'use strict';

const readeds = require('./readeds.js');

const intentsCache = [];

const files = readeds.commands.concat(readeds.services).concat(readeds.events);

for (const _file of files) {

    for (const _intent of _file.intents) {
        
        // Salta la carga si el intent esta repetido
        if (intentsCache.includes(_intent)) continue;
            
        // Carga el intent
        intentsCache.push(_intent);
    };
};

// Exporta los intents
module.exports = intentsCache;