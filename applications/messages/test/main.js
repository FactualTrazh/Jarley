const discord = require('discord.js');

module.exports = {

    servers: true,
    users:   true,

    events: {
        
        application: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor('#FFFFFF');

            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};