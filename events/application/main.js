let access = require('./resources/access.js');
let reply  = require('./resources/reply.js');

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('interactionCreate', async (event) => {

            // Comandos
            if (event.isCommand()) {

                for (let _file of loaders.events[utils.file.name].applications) {

                    let content = {

                        client,
                        event,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    };

                    if (event.commandName === _file.name
                    &&  _file.type        === 'command'
                    &&  await reply(content)
                    &&  access(content)) {

                        try {
                    
                            // Carga el evento del archivo
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
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
                
                for (let _file of loaders.events[utils.file.name].applications) {

                    let content = {

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

                        try {
                    
                            // Carga el evento del archivo
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
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
                
                for (let _file of loaders.events[utils.file.name].applications) {

                    let content = {

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

                        try {
                    
                            // Carga el evento del archivo
                            _file.events[utils.file.name](content);
                        } catch (err) {

                            // Responde a la ejecucion con un mensaje de error
                            event.editReply({ content: '```Hubo un error al ejecutar el comando```' }).catch(() => {});

                            // Muestra el error en la consola
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