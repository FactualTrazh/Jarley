'use strict';

const bases     = require('./bases/export.js');
const databases = require('./databases/export.js');
const loaders   = require('./loaders/exports.js');
const tensor    = require('./tensor/export.js');

module.exports = function (client) {
    
    for (const _file of loaders.readeds.events) {

        const content = {
            
            client:    client,
            tensor:    tensor,
            loaders:   loaders,
            databases: databases,
            bases:     bases,
            utils: new bases.utils(_file)
        };

        // Carga el evento
        _file.event(content);
    };
};