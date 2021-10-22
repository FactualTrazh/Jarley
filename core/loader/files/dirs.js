'use strict';

const fs   = require('fs');
const path = require('path');

const directories = {

    commands: {

        _:        path.join(__dirname, '../../../commands/'),
        inputs:   path.join(__dirname, '../../../commands/inputs/'),
        messages: path.join(__dirname, '../../../commands/messages/'),
        users:    path.join(__dirname, '../../../commands/users/')
    },

    events:   path.join(__dirname, '../../../events/'),
    services: path.join(__dirname, '../../../services/')
};

// Verifica si existen los directorios
if (!fs.existsSync(directories.commands._)) fs.mkdirSync(directories.commands._);

if (!fs.existsSync(directories.commands.inputs)) fs.mkdirSync(directories.commands.inputs);
if (!fs.existsSync(directories.commands.messages)) fs.mkdirSync(directories.commands.messages);
if (!fs.existsSync(directories.commands.users)) fs.mkdirSync(directories.commands.users);

if (!fs.existsSync(directories.events)) fs.mkdirSync(directories.events);
if (!fs.existsSync(directories.services)) fs.mkdirSync(directories.services);

// Exporta los directorios
module.exports = directories;