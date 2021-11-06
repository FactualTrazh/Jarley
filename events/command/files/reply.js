'use strict';

module.exports = async function ({ client, event, loaders, databases, bases, utils }) {

    // Las banderas
    const hideFlag = utils.file.flags.includes('hide');

    try {

        await event.deferReply({ ephemeral: hideFlag });
    } catch {

        return false;
    } finally {

        return true;
    };
};