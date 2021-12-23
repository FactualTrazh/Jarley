let discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',

    servers: true,
    users:   true,

    events: {
        
        application: function ({ client, event, loaders, databases, bases, utils }) {

            let messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor('#FFFFFF');

            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};