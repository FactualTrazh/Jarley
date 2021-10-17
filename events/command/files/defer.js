'use strict';

module.exports = async function ({ client, event, loader, databases, bases, utils }) {

    try {

        await event.deferReply();
    } catch {

        return false;
    } finally {

        return true;
    };
};