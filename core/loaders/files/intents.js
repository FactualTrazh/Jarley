'use strict';

const readeds = require('./readeds.js');

const intentsCache = [];

const files = readeds.commands.concat(readeds.services).concat(readeds.events);

for (const _file of files) {

    for (const _intent of _file.intents) {
        
        // Verifica si el intent no esta repetido
        if (!intentsCache.includes(_intent)) {

            // Carga el intent
            intentsCache.push(_intent);
        }; 
    };
};

// Exporta los intents
module.exports = intentsCache;