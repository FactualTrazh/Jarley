'use strict';

module.exports = function ({ client, event, loaders, databases, bases, utils }) {

    // Verifica si se ejecuto un DM y el flag para utilizarse ahi
    if (!event.inGuild()
    &&   utils.file.flags.includes('dm')) return true;

    // Verifica si se ejecuto un Servidor y el flag para utilizarse ahi
    if (event.inGuild()
    &&  utils.file.flags.includes('guild')) return true;

    // Si no cumple ninguna de las anteriores
    return false;
};