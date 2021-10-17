'use strict';

const discord = require('discord.js');

module.exports = {
    
    events: {
    
        command: function ({ client, event, loader, databases, bases, utils }) {

            // Las opciones
            const userOption = event.options.getUser('user');

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Hola ${userOption.toString()}`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};