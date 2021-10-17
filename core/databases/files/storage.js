'use strict';

const megadb = require('megadb');

module.exports = {

    commands: new megadb.crearDB('commands'),
    events:   new megadb.crearDB('events'),
    services: new megadb.crearDB('services')
};