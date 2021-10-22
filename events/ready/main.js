'use strict';

module.exports = {

    priority: true,

    event: function ({ client, loader, databases, bases, utils }) {

        client.on('ready', () => {

            for (const inFile of loader.events[utils.file.name].all) {

                const content = {

                    client:    client,
                    loader:    loader,
                    databases: databases,
                    bases:     bases,
                    utils: new bases.utils(inFile)
                };

                try {

                    inFile.events[utils.file.name](content);
                } catch (err) {

                    console.log(err);
                };
            };
        });
    }
};