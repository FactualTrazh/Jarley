'use strict';

const discord = require('discord.js');

module.exports = {

    events: {
    
        command: function ({ client, event, loader, databases, bases, utils }) {

            // Las opciones
            const messageOption = event.options.getMessage('message');

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${messageOption.author.toString()}`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};