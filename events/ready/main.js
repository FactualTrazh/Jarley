'use strict';

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('ready', () => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client,
                    loaders,
                    databases,
                    bases,
                    utils: new bases.utils(_file)
                };

                // Carga el evento del archivo
                try {

                    _file.events[utils.file.name](content);
                } catch (err) {

                    console.log('Ejecucion fallida');
                    console.log();
                    console.log(err);
                };
            };
        });
    }
};