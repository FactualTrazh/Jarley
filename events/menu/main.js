'use strict';

module.exports = {

    event: function ({ client, tensor, loaders, databases, bases, utils }) {

        client.on('interactionCreate', (event) => {

            if (!event.isSelectMenu()
            ||  !event.inGuild()) return;

            for (const _file of loaders.events[utils.file.name].commands) {

                const content = {

                    client:     client,
                    event:      event,
                    tensor:     tensor,
                    loaders:    loaders,
                    databases:  databases,
                    bases:      bases,
                    utils:  new bases.utils(_file)
                };

                if (event.message.interaction.commandName === _file.name) {
                    
                    try {

                        _file.events[utils.file.name](content);
                    } catch (err) {

                        console.log(err);
                    };
                };
            };
        });
    }
};