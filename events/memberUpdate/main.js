'use strict';

module.exports = {

    event: function ({ client, tensor, loaders, databases, bases, utils }) {

        client.on('guildMemberUpdate', ({}, event) => {

            for (const _file of loaders.events[utils.file.name].all) {

                const content = {

                    client:     client,
                    event:      event,
                    tensor:     tensor,
                    loaders:    loaders,
                    databases:  databases,
                    bases:      bases,
                    utils:  new bases.utils(_file)
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