'use strict';

const bases     = require('./bases/export.js');
const databases = require('./databases/export.js');
const loaders   = require('./loaders/exports.js');

module.exports = function (client) {

    for (const _event of loaders.readeds.events) {

        // Salta la carga si el evento no fue cargado
        if (!loaders.events[_event.name]) continue;
        
        const content = {
            
            client:    client,
            loaders:   loaders,
            databases: databases,
            bases:     bases,
            utils: new bases.utils(_event)
        };
    
        // Carga el evento
        _event.event(content);
    };
};