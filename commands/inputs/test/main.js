'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',
    
    events: {
    
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`El **ID** de este canal es **${event.channel.id}**`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};