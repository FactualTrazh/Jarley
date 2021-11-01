'use strict';

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('roleUpdate', ({}, event) => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client:    client,
                    event:     event,
                    loaders:   loaders,
                    databases: databases,
                    bases:     bases,
                    utils: new bases.utils(_file)
                };

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