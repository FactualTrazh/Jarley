'use strict';

const megadb = require('megadb');

module.exports = {

    commands: new megadb.memoDB('commands'),
    events:   new megadb.memoDB('events'),
    services: new megadb.memoDB('services')
};