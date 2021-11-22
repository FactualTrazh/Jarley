module.exports = function ({ client, event, loaders, databases, bases, utils }) {

    // Si la aplicacion permite ejecutarse en chats de servidores
    if (event.inGuild()
    &&  utils.file.flags.includes('server')) return true;

    // Si la aplicacion permite ejecutarse en chats de usuarios
    if (!event.inGuild()
    &&   utils.file.flags.includes('user')) return true;

    // Sila aplicacion no permite ninguna de las anteriores
    event.editReply({ content: '```La aplicacion no permite la ejecucion en este lugar```' }).catch(() => {});

    return false;
};