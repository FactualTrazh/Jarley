'use strict';

module.exports = function ({ client, event, loaders, databases, bases, utils }) {

    // Las banderas
    const userFlag   = utils.file.flags.includes('user');
    const serverFlag = utils.file.flags.includes('server');

    // Verifica si el comando permite ser ejecutado en MDs
    if (!event.inGuild()
    &&   userFlag) return true;

    // Verifica si el comando permite ser ejecutado en servidores
    if (event.inGuild()
    &&  serverFlag) return true;

    // Si el comando no permitio niguna de las anteriores
    event.editReply({ content: '```Este comando no permite su ejecucion en este lugar```', ephemeral: true }).catch(() => {});

    return false;
};