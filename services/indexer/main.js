module.exports = {

    priority: true,

    events: {

        ready: async function ({ client, loaders, databases, bases, utils }) {

            let loadedApplications = loaders.readeds.applications.map((val) => val.schema);
            let botApplications    = await client.application.commands.fetch();

            function index () {
    
                client.application.commands.set(loadedApplications)
                .then(() => console.log('Indexacion finalizada'))
                .catch((err) => {
                    
                    console.log('Indexacion fallida');
                    console.log();
                    console.log(err);
                });
            };

            // Fuerza el indexado
            // return index ();

            // Verifica si los tamaños son iguales
            if (loadedApplications.length !== botApplications.size) return index();

            // Verifica si los arrays son iguales
            for (let _file of botApplications.values()) {

                // Obtiene el comando
                let findCommand = loadedApplications.find((val) => val.name === _file.name);

                // Verifica si se obtuvo el comando
                if (!findCommand) return index();

                // Verifica si el comando tiene opciones
                if (findCommand.options) {

                    // Verifica si los tamaños son iguales
                    if (findCommand.options.length !== _file.options.length) return index();

                    // Verifica si los arrays son iguales
                    for (let _option of _file.options) {

                        // Obtiene la opcion
                        let findOption = findCommand.options.find((val) => val.name === _option.name);

                        // Verifica si se obtuvo la opcion
                        if (!findOption) return index();
                    };
                };
            };  
        }
    }
};