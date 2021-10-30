'use strict';

const bases     = require('./bases/export.js');
const databases = require('./databases/export.js');
const loaders   = require('./loaders/exports.js');

module.exports = function (client) {

    for (const _event in loaders.events) {

        // Obtiene el evento entre los cargados
        const file = loaders.readeds.events.find((x) => x.name === _event);

        const content = {
            
            client:    client,
            loaders:   loaders,
            databases: databases,
            bases:     bases,
            utils: new bases.utils(file)
        };

        // Carga los eventos
        file.event(content);
    };
};