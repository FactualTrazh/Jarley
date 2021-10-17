'use strict';

const discord = require('discord.js');

module.exports = {

    intents: [

        discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ],
    
    event: function ({ client, loader, databases, bases, utils }) {

        client.on('stickerDelete', (event) => {

            for (const inFile of loader.events[utils.file.name].all) {

                const content = {

                    client:    client,
                    event:     event,
                    loader:    loader,
                    databases: databases,
                    bases:     bases,
                    utils: new bases.utils(inFile)
                };

                try {

                    inFile.events[utils.file.name](content);
                } catch (err) {

                    console.log(err);
                };
            };
        });
    }
};