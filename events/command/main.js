'use strict';

const reply = require('./files/reply.js');

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('interactionCreate', async (event) => {

            if (!event.inGuild()) return;

            // Comandos
            if (event.isCommand()) {

                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loaders:   loaders,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'input'
                    &&  await reply(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };
                    };
                };
            };

            // Mensajes
            if (event.isContextMenu()
            &&  event.targetType === 'MESSAGE') {
                
                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loaders:   loaders,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'message'
                    &&  await reply(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };
                    };
                };
            };

            // Usuarios
            if (event.isContextMenu()
            &&  event.targetType === 'USER') {
                
                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loaders:   loaders,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'user'
                    &&  await reply(content)) {

                        console.log(_file);

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };
                    };
                };
            };
        });
    }
};