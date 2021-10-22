'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',
    
    events: {
    
        command: function ({ client, event, loader, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};