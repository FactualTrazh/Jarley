'use strict';

module.exports = {

    event: function ({ client, loader, databases, bases, utils }) {

        client.on('interactionCreate', (event) => {

            if (!event.isSelectMenu()
            ||  !event.inGuild()) return;

            for (const inFile of loader.events[utils.file.name].commands) {

                const content = {

                    client:    client,
                    event:     event,
                    loader:    loader,
                    databases: databases,
                    bases:     bases,
                    utils: new bases.utils(inFile)
                };

                if (event.message.interaction.commandName === inFile.name) {
                    
                    try {

                        inFile.events[utils.file.name](content);
                    } catch (err) {

                        console.log(err);
                    };
                };
            };
        });
    }
};