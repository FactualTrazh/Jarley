'use strict';

const bases     = require('./bases/export.js');
const databases = require('./databases/export.js');
const loaders   = require('./loaders/exports.js');

module.exports = function (client) {

    for (const _event of loaders.readeds.events) {

        // Verifica si el evento fue cargado
        if (loaders.events[_event.name]) {

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
};