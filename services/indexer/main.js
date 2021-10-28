'use strict';

module.exports = {

    events: {

        ready: async function ({ client, loaders, databases, bases, utils }) {

            const loadedCommands = loaders.readeds.commands.map((x) => x.schema);
            const botCommands    = await client.application.commands.fetch();

            function index () {
    
                client.application.commands.set(loadedCommands)
                .then(() => console.log('Indexado de comandos finalizado'))
                .catch((error) => console.error('Indexado de comandos fallido', error));
            };

            // Fuerza el indexado
            // return index ();

            // Verifica si los tamaños son iguales
            if (loadedCommands.length !== botCommands.size) return index();

            // Verifica si los arrays son iguales
            for (const _file of botCommands.values()) {

                // Obtiene el comando
                const findCommand = loadedCommands.find((x) => x.name === _file.name);

                // Verifica si se obtuvo el comando
                if (!findCommand) return index();

                // Verifica si el comando tiene opciones
                if (findCommand.options) {

                    // Verifica si los tamaños son iguales
                    if (findCommand.options.length !== _file.options.length) return index();

                    // Verifica si los arrays son iguales
                    for (const _option of _file.options) {

                        // Obtiene la opcion
                        const findOption = findCommand.options.find((x) => x.name === _option.name);

                        // Verifica si se obtuvo la opcion
                        if (!findOption) return index();
                    };
                };
            };  
        }
    }
};