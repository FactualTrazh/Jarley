'use strict';

module.exports = function ({ client, event, loaders, databases, bases, utils }) {

    // Las banderas
    const serverFlag = utils.file.flags.includes('server');
    const userFlag   = utils.file.flags.includes('user');

    // Si el comando permite ejecutarse en chats de servidores
    if (event.inGuild()
    &&  serverFlag) return true;

    // Si el comando permite ejecutarse en chats de usuarios
    if (!event.inGuild()
    &&   userFlag) return true;

    // Si el comando no permite ninguna de las anteriores
    event.editReply({ content: '```El comando no permite ejecutarse en este chat```' }).catch(() => {});

    return false;
};