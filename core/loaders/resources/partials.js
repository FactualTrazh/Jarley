const readeds = require('./readeds.js');
const events  = require('./events.js');

const cache = [];

for (const _event of readeds.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los parciales del evento
    for (const _partial of _event.partials) {

        // Salta si el parcial ya fue cargado
        if (cache.includes(_partial)) continue;

        // Carga el parcial
        cache.push(_partial);
    };

    // Carga los parciales de los archivos que contiene el evento
    for (const _file of events[_event.name].all) {

        // Carga los parciales del archivo
        for (const _partial of _file.partials) {

            // Salta si el parcial ya fue cargado
            if (cache.includes(_partial)) continue;

            // Carga el parcial
            cache.push(_partial);
        };
    };
};

// Exporta los parciales
module.exports = cache;