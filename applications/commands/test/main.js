const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',

    flags: [ 'server', 'user' ],

    events: {
        
        application: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor('#FFFFFF');

            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};