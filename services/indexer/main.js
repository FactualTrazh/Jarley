'use strict';

module.exports = {

    events: {

        ready: async function ({ client, tensor, loaders, databases, bases, utils }) {

            const loadedCommands = loaders.readeds.commands.map((x) => x.schema);
            const botCommands    = await client.application.commands.fetch();

            function index () {
    
                client.application.commands.set(loadedCommands)
                .then(() => console.log('Comandos indexados'))
                .catch((err) => console.log(err));
            };

            // return index ();

            // Verifica si el tamaño del los arrays son iguales
            if (loadedCommands.length !== botCommands.size) return index();

            // Verifica si el contenido de los arrays son iguales
            for (const _file of botCommands.values()) {

                if (!loadedCommands.find((x) => x.name === _file.name)) return index();
            };  
        }
    }
};