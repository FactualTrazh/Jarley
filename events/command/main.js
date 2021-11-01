'use strict';

const defer = require('./files/defer.js');

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
                    &&  _file.type        === 'CHAT_INPUT'
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (error) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(error);
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
                    &&  _file.type        === 'MESSAGE'
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (error) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(error);
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
                    &&  _file.type        === 'USER'
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (error) {

                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(error);
                        };
                    };
                };
            };
        });
    }
};