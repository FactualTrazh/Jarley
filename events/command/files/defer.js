'use strict';

module.exports = async function ({ client, event, loaders, databases, bases, utils }) {
    
    try {

        await event.deferReply({ ephemeral: utils.file.flags.includes('hide') });
    } catch {

        return false;
    } finally {

        return true;
    };
};