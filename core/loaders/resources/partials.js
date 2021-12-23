let readeds = require('./readeds.js');
let events  = require('./events.js');

let cache = [];

for (let _event of readeds.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los parciales del evento
    for (let _partial of _event.partials) {

        // Salta si el parcial ya fue cargado
        if (cache.includes(_partial)) continue;

        // Carga el parcial
        cache.push(_partial);
    };

    // Carga los parciales de los archivos que contiene el evento
    for (let _file of events[_event.name].all) {

        // Carga los parciales del archivo
        for (let _partial of _file.partials) {

            // Salta si el parcial ya fue cargado
            if (cache.includes(_partial)) continue;

            // Carga el parcial
            cache.push(_partial);
        };
    };
};

// Exporta los parciales
module.exports = cache;