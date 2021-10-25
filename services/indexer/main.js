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

                // Verifica si los tamaños son iguales
                if (findCommand.options.length !== _file.options.length) return index();

                // Verifica si los arrays son iguales
                for (const _option of _file.options) {

                    // Obtiene la opcion
                    const findOption = findCommand.options.find((x) => x.name === _option.name);

                    // Verifica si se obtuvo la opcion
                    if (!findOption) return index();

                    // Verifica si la descripcion es igual
                    if (findOption.description !== _option.description) return index();

                    // Verifica si el tipo es igual
                    if (findOption.type !== _option.type) return index();
                };
            };  
        }
    }
};