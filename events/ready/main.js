module.exports = {

    priority: true,

    event: function ({ client, loaders, databases, bases, utils }) {

        client.on('ready', () => {

            for (let _file of loaders.events[utils.file.name].all) {

                try {

                    // Carga el evento del archivo
                    _file.events[utils.file.name]({

                        client,
                        loaders,
                        databases,
                        bases,
                        utils: new bases.utils(_file)
                    });
                } catch (err) {

                    // Muestra el error en la consola
                    console.log(err);
                };
            };
        });
    }
};