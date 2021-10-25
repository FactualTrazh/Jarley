'use strict';

module.exports = {

    events: {

        ready: function ({ client, tensor, loaders, databases, bases, utils }) {

            for (const _readed in loaders.readeds) {

                const enabled  = loaders.readeds[_readed].filter((x) => x.flags.includes('priority'));
                const disabled = loaders.readeds[_readed].filter((x) => !x.flags.includes('priority'));
            
                loaders.readeds[_readed] = enabled.concat(disabled);
            };
        }
    }
};