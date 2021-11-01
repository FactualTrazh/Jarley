'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',
    
    events: {
    
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const userOption = event.options.getUser('user');

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`El **ID** de este usuario es **${userOption.id}**`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};