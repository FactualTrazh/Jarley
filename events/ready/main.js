'use strict';

module.exports = {

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('ready', () => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client:    client,
                    loaders:   loaders,
                    databases: databases,
                    bases:     bases,
                    utils: new bases.utils(_file)
                };

                try {

                    _file.events[utils.file.name](content);
                } catch (err) {

                    console.log(err);
                };
            };
        });
    }
};