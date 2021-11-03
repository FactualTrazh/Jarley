'use strict';

const discord = require('discord.js');

module.exports = {

    intents: [

        discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ],

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('emojiDelete', (event) => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client,
                    event,
                    loaders,
                    databases,
                    bases,
                    utils: new bases.utils(_file)
                };

                // Carga el evento del archivo
                try {

                    _file.events[utils.file.name](content);
                } catch (err) {

                    // Muestra el error en la consola
                    console.log('Ejecucion fallida');
                    console.log();
                    console.log(err);
                };
            };
        });
    }
};