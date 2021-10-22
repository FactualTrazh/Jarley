'use strict';

module.exports = {

    event: function ({ client, loader, databases, bases, utils }) {

        client.on('channelDelete', (event) => {

            for (const inFile of loader.events[utils.file.name].all) {

                const content = {

                    client:    client,
                    event:     event,
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