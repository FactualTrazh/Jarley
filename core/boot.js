'use strict';

const loader    = require('./loader/export.js');
const databases = require('./databases/export.js');
const bases     = require('./bases/export.js');

module.exports = function (client) {

    for (const inFile of loader.reader.events) {

        const content = {
            
            client:    client,
            loader:    loader,
            databases: databases,
            bases:     bases,
            utils: new bases.utils(inFile, client)
        };

        // Carga el evento
        inFile.event(content);
    };
};