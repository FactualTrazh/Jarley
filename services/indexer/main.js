'use strict';

module.exports = {
    
    priority: true,

    events: {

        ready: async function ({ client, loader, databases, bases, utils }) {

            const loadedCommands = loader.reader.commands.map((x) => x.show);
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
            for (const inFile of botCommands.values()) {

                if (!loadedCommands.find((x) => x.name === inFile.name)) return index();
            };  
        }
    }
};