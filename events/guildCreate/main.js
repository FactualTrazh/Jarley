let discord = require('discord.js');

module.exports = {

    intents: [
        
        discord.Intents.FLAGS.GUILDS
    ],

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('guildCreate', (event) => {

            for (let _file of loaders.events[utils.file.name].all) {

                try {

                    // Carga el evento del archivo
                    _file.events[utils.file.name]({

                        client,
                        event,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    });
                } catch (err) {

                    // Muestra el error en la consola
                    console.log(err);
                };
            };
        });
    }
};