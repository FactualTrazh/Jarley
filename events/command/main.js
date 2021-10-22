'use strict';

const defer = require('./files/defer.js');

module.exports = {

    event: function ({ client, loader, databases, bases, utils }) {

        client.on('interactionCreate', async (event) => {

            if (!event.inGuild()) return;

            // Comandos
            if (event.isCommand()) {

                for (const inFile of loader.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loader:    loader,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(inFile)
                    };

                    if (event.commandName === inFile.name
                    &&  await defer(content)) {

                        try {
                    
                            inFile.events[utils.file.name](content);
                        } catch (err) {
        
                            console.log(err);
                        };
                    };
                };
            };

            // Mensajes
            if (event.isContextMenu()
            &&  event.targetType === 'MESSAGE') {
                
                for (const inFile of loader.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loader:    loader,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(inFile)
                    }

                    if (event.commandName === inFile.name
                    &&  event.targetType  === inFile.type
                    &&  await defer(content)) {

                        try {
                    
                            inFile.events[utils.file.name](content);
                        } catch (err) {
        
                            console.log(err);
                        };
                    };
                };
            };

            // Usuarios
            if (event.isContextMenu()
            &&  event.targetType === 'USER') {
                
                for (const inFile of loader.events[utils.file.name].commands) {

                    const content = {

                        client:    client,
                        event:     event,
                        loader:    loader,
                        databases: databases,
                        bases:     bases,
                        utils: new bases.utils(inFile)
                    }

                    if (event.commandName === inFile.name
                    &&  event.targetType  === inFile.type
                    &&  await defer(content)) {

                        try {
                    
                            inFile.events[utils.file.name](content);
                        } catch (err) {
        
                            console.log(err);
                        };
                    };
                };
            };
        });
    }
};