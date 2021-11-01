'use strict';

const fs   = require('fs');
const path = require('path');

const pathsCache = {

    commands: {

        inputs:   path.join(__dirname, '../../../commands/inputs'),
        messages: path.join(__dirname, '../../../commands/messages'),
        users:    path.join(__dirname, '../../../commands/users')
    },

    events:   path.join(__dirname, '../../../events'),
    services: path.join(__dirname, '../../../services')
};

// Crea los directorios si no existen
if (!fs.existsSync(pathsCache.commands.inputs)) fs.mkdirSync(pathsCache.commands.inputs, { recursive: true });
if (!fs.existsSync(pathsCache.commands.messages)) fs.mkdirSync(pathsCache.commands.messages, { recursive: true });
if (!fs.existsSync(pathsCache.commands.users)) fs.mkdirSync(pathsCache.commands.users, { recursive: true });


if (!fs.existsSync(pathsCache.events)) fs.mkdirSync(pathsCache.events, { recursive: true });
if (!fs.existsSync(pathsCache.services)) fs.mkdirSync(pathsCache.services, { recursive: true });

// Exporta los directorios
module.exports = pathsCache;