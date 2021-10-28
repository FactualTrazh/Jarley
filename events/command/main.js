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
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {
        
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
                    &&  event.targetType  === _file.type
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {
        
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
                    &&  event.targetType  === _file.type
                    &&  await defer(content)) {

                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {
        
                            console.log(err);
                        };
                    };
                };
            };
        });
    }
};