'use strict';

const discord = require('discord.js');

module.exports = {

    intents: [

        discord.Intents.FLAGS.GUILD_BANS
    ],

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('guildBanAdd', (event) => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client,
                    event,
                    loaders,
                    databases,
                    bases,
                    utils: new bases.utils(_file)
                };

                try {

                    // Carga el evento del archivo
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