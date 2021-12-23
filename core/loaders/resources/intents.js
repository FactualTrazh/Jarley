let readeds = require('./readeds.js');
let events  = require('./events.js');

let cache = [];

for (let _event of readeds.events) {

    // Salta la carga si el evento no fue cargado
    if (!events[_event.name]) continue;

    // Carga los intentos del evento
    for (let _intent of _event.intents) {

        // Salta si el intento ya fue cargado
        if (cache.includes(_intent)) continue;

        // Carga el intento
        cache.push(_intent);
    };

    // Carga los intentos de los archivos que contiene el evento
    for (let _file of events[_event.name].all) {

        // Carga los intentos del archivo
        for (let _intent of _file.intents) {

            // Salta si el intent ya fue cargado
            if (cache.includes(_intent)) continue;

            // Carga el intento
            cache.push(_intent);
        };
    };
};

// Exporta los intentos
module.exports = cache;