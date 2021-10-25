'use strict';

const fs   = require('fs');
const path = require('path');

const directories = {

    commands: {

        inputs:   path.join(__dirname, '../../../commands/inputs'),
        messages: path.join(__dirname, '../../../commands/messages'),
        users:    path.join(__dirname, '../../../commands/users')
    },

    events:   path.join(__dirname, '../../../events'),
    services: path.join(__dirname, '../../../services')
};

// Crea los directorios si no existen
if (!fs.existsSync(directories.commands.inputs)) fs.mkdirSync(directories.commands.inputs, { recursive: true });
if (!fs.existsSync(directories.commands.messages)) fs.mkdirSync(directories.commands.messages, { recursive: true });
if (!fs.existsSync(directories.commands.users)) fs.mkdirSync(directories.commands.users, { recursive: true });


if (!fs.existsSync(directories.events)) fs.mkdirSync(directories.events, { recursive: true });
if (!fs.existsSync(directories.services)) fs.mkdirSync(directories.services, { recursive: true });

// Exporta los directorios
module.exports = directories;