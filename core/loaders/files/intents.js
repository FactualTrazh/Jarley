'use strict';

const readeds = require('./readeds.js');
const events  = require('./events.js');

const intentsCache = [];

for (const _event of readeds.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los intents del evento
    for (const _intent of _event.intents) {

        // Salta si el intent ya fue cargado
        if (intentsCache.includes(_intent)) continue;

        // Carga el intent
        intentsCache.push(_intent);
    };

    // Carga los intents de los archivos que contiene el evento
    for (const _file of events[_event.name].all) {

        // Carga los intents del archivo
        for (const _intent of _file.intents) {

            // Salta si el intent ya fue cargado
            if (intentsCache.includes(_intent)) continue;

            // Carga el intent
            intentsCache.push(_intent);
        };
    };
};

// Exporta los intents
module.exports = intentsCache;