'use strict';

const readeds = require('./readeds.js');
const events  = require('./events.js');

const partialsCache = [];

for (const _event of readeds.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los partials del evento
    for (const _partial of _event.partials) {

        // Salta si el partial ya fue cargado
        if (partialsCache.includes(_partial)) continue;

        // Carga el partial
        partialsCache.push(_partial);
    };

    // Carga los partials de los archivos que contiene el evento
    for (const _file of events[_event.name].all) {

        // Carga los partials del archivo
        for (const _partial of _file.partials) {

            // Salta si el partial ya fue cargado
            if (partialsCache.includes(_partial)) continue;

            // Carga el partial
            partialsCache.push(_partial);
        };
    };
};

// Exporta los partials
module.exports = partialsCache;