'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',
    
    events: {
    
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageOption = event.options.getMessage('message');

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`El **ID** de este mensaje es **${messageOption.id}**`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};