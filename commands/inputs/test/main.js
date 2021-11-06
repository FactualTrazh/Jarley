'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',

    flags: [ 'hide', 'server', 'user' ],

    events: {
        
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${event.user.toString()}`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};