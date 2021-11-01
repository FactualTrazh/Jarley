'use strict';

const discord = require('discord.js');

module.exports = {

    description: 'Comando de prueba',
    
    flags: [ 'dm', 'guild' ],

    intents: [

        discord.Intents.FLAGS.GUILDS
    ],

    events: {
    
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`La **ID** de este canal es **${event.channel?.id ?? 'Indefinida por ejecutarse desde un DM o por falta de permisos'}**`)
            .setColor('#FFFFFF');
    
            event.editReply({ embeds: [ messageEmbed ] }).catch(() => {});
        }
    }
};