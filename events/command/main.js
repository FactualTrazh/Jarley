'use strict';

const access = require('./files/access.js');
const reply  = require('./files/reply.js');

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('interactionCreate', async (event) => {

            // Verifica si la interaccion esta ejecutandose en un servidor
            // if (!event.inGuild()) return;

            // Comandos
            if (event.isCommand()) {

                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client,
                        event,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'input'
                    &&  await reply(content)
                    &&  access(content)) {

                        // Carga el evento del archivo
                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };

                        // Detiene el bucle porque ya encontro el archivo
                        break;
                    };
                };
            };

            // Mensajes
            if (event.isContextMenu()
            &&  event.targetType === 'MESSAGE') {
                
                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client,
                        event,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'message'
                    &&  await reply(content)
                    &&  access(content)) {

                        // Carga el evento del archivo
                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };

                        // Detiene el bucle porque ya encontro el archivo
                        break;
                    };
                };
            };

            // Usuarios
            if (event.isContextMenu()
            &&  event.targetType === 'USER') {
                
                for (const _file of loaders.events[utils.file.name].commands) {

                    const content = {

                        client,
                        event,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'user'
                    &&  await reply(content)
                    &&  access(content)) {

                        // Carga el evento del archivo
                        try {
                    
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
                            console.log('Ejecucion fallida');
                            console.log();
                            console.log(err);
                        };

                        // Detiene el bucle porque ya encontro el archivo
                        break;
                    };
                };
            };
        });
    }
};