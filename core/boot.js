let bases     = require('./bases/export.js');
let databases = require('./databases/export.js');
let loaders   = require('./loaders/exports.js');

module.exports = function (client) {

    for (let _event of loaders.readeds.events) {

        // Salta la carga si el evento no fue cargado
        if (!loaders.events[_event.name]) continue;

        // Carga el evento
        _event.event({
            
            client,
            loaders,
            databases,
            bases,
            utils: new bases.utils(_event)
        });
    };
};