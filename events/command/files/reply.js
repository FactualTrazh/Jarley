'use strict';

module.exports = async function ({ client, event, loaders, databases, bases, utils }) {

    // Las banderas
    const ephemeralFlag = utils.file.flags.includes('ephemeral');

    try {

        await event.deferReply({ ephemeral: ephemeralFlag });
    } catch {

        return false;
    } finally {

        return true;
    };
};