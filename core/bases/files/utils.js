'use strict';

const discord = require('discord.js');

module.exports = class {

    constructor (file) {

        this.file = file;

        this.core = {

            version: '1.16.0',
            icon:    'https://i.ibb.co/QdswNcp/icon.png',
            banner:  'https://i.ibb.co/Stp3ZNn/banner.png',
            github:  'https://github.com/MarzonDark/Jarley'
        };

        this.flags = {
            
            link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
            nsfw: /(porn(o|))|(sex(o|))|(culo)|(put(o|a))|(pene)|(semen)|(esperma)|(cum)|(vagina)|(teta)|(hentai)|(verga)|(folla)|(viola)|(fuck)|(xxx)|(ano)|(bukake)/g
        };
    };
    
    /**
     * Traduce permisos de ingles al español
     * @param {string|bigint} content
     */
    perms (content) {

        const list = {

            ADD_REACTIONS:              'Añadir reacciones',
            ADMINISTRATOR:              'Administrador',
            ATTACH_FILES:               'Adjuntar archivos',
            BAN_MEMBERS:                'Banear miembros',
            CHANGE_NICKNAME:            'Cambiar apodo',
            CONNECT:                    'Conectar',
            CREATE_INSTANT_INVITE:      'Crear invitacion',
            DEAFEN_MEMBERS:             'Ensordecer miembros',
            EMBED_LINKS:                'Insertar Enlaces',
            KICK_MEMBERS:               'Expulsar miembros',
            MANAGE_CHANNELS:            'Gestionar canales',
            MANAGE_EMOJIS_AND_STICKERS: 'Gestionar emojis y pegatinas',
            MANAGE_GUILD:               'Gestionar servidor',
            MANAGE_MESSAGES:            'Gestionar mensajes',
            MANAGE_NICKNAMES:           'Gestionar apodos',
            MANAGE_ROLES:               'Gestionar roles',
            MANAGE_THREADS:             'Gestionar hilos',
            MANAGE_WEBHOOKS:            'Gestionar webhooks',
            MENTION_EVERYONE:           'Mencionar @everyone, @here y todos los roles',
            MOVE_MEMBERS:               'Mover miembros',
            MUTE_MEMBERS:               'Silenciar miembros',
            PRIORITY_SPEAKER:           'Prioridad de palabra',
            READ_MESSAGE_HISTORY:       'Leer el historial de mensajes',
            REQUEST_TO_SPEAK:           'Solicitar hablar',
            SEND_MESSAGES:              'Enviar mensajes',
            SEND_TTS_MESSAGES:          'Enviar mensajes de texto a voz',
            SPEAK:                      'Hablar',
            STREAM:                     'Video',
            USE_APPLICATION_COMMANDS:   'User comandos de barra diagonal',
            USE_EXTERNAL_EMOJIS:        'Usar emojis externos',
            USE_EXTERNAL_STICKERS:      'User pagatinas externas',
            USE_PRIVATE_THREADS:        'Usar hilos privados',
            USE_PUBLIC_THREADS:         'Usar hilos publicos',
            USE_VAD:                    'Usar actividad de voz',
            VIEW_AUDIT_LOG:             'Ver el registro de auditoria',
            VIEW_CHANNEL:               'Ver canales',
            VIEW_GUILD_INSIGHTS:        'Ver informacion del servidor',

            [discord.Permissions.FLAGS.ADD_REACTIONS]:              'Añadir reacciones',
            [discord.Permissions.FLAGS.ADMINISTRATOR]:              'Administrador',
            [discord.Permissions.FLAGS.ATTACH_FILES]:               'Adjuntar archivos',
            [discord.Permissions.FLAGS.BAN_MEMBERS]:                'Banear miembros',
            [discord.Permissions.FLAGS.CHANGE_NICKNAME]:            'Cambiar apodo',
            [discord.Permissions.FLAGS.CONNECT]:                    'Conectar',
            [discord.Permissions.FLAGS.CREATE_INSTANT_INVITE]:      'Crear invitacion',
            [discord.Permissions.FLAGS.DEAFEN_MEMBERS]:             'Ensordecer miembros',
            [discord.Permissions.FLAGS.EMBED_LINKS]:                'Insertar Enlaces',
            [discord.Permissions.FLAGS.KICK_MEMBERS]:               'Expulsar miembros',
            [discord.Permissions.FLAGS.MANAGE_CHANNELS]:            'Gestionar canales',
            [discord.Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS]: 'Gestionar emojis y pegatinas',
            [discord.Permissions.FLAGS.MANAGE_GUILD]:               'Gestionar servidor',
            [discord.Permissions.FLAGS.MANAGE_MESSAGES]:            'Gestionar mensajes',
            [discord.Permissions.FLAGS.MANAGE_NICKNAMES]:           'Gestionar apodos',
            [discord.Permissions.FLAGS.MANAGE_ROLES]:               'Gestionar roles',
            [discord.Permissions.FLAGS.MANAGE_THREADS]:             'Gestionar hilos',
            [discord.Permissions.FLAGS.MANAGE_WEBHOOKS]:            'Gestionar webhooks',
            [discord.Permissions.FLAGS.MENTION_EVERYONE]:           'Mencionar @everyone, @here y todos los roles',
            [discord.Permissions.FLAGS.MOVE_MEMBERS]:               'Mover miembros',
            [discord.Permissions.FLAGS.MUTE_MEMBERS]:               'Silenciar miembros',
            [discord.Permissions.FLAGS.PRIORITY_SPEAKER]:           'Prioridad de palabra',
            [discord.Permissions.FLAGS.READ_MESSAGE_HISTORY]:       'Leer el historial de mensajes',
            [discord.Permissions.FLAGS.REQUEST_TO_SPEAK]:           'Solicitar hablar',
            [discord.Permissions.FLAGS.SEND_MESSAGES]:              'Enviar mensajes',
            [discord.Permissions.FLAGS.SEND_TTS_MESSAGES]:          'Enviar mensajes de texto a voz',
            [discord.Permissions.FLAGS.SPEAK]:                      'Hablar',
            [discord.Permissions.FLAGS.STREAM]:                     'Video',
            [discord.Permissions.FLAGS.USE_APPLICATION_COMMANDS]:   'User comandos de barra diagonal',
            [discord.Permissions.FLAGS.USE_EXTERNAL_EMOJIS]:        'Usar emojis externos',
            [discord.Permissions.FLAGS.USE_EXTERNAL_STICKERS]:      'User pagatinas externas',
            [discord.Permissions.FLAGS.USE_PRIVATE_THREADS]:        'Usar hilos privados',
            [discord.Permissions.FLAGS.USE_PUBLIC_THREADS]:         'Usar hilos publicos',
            [discord.Permissions.FLAGS.USE_VAD]:                    'Usar actividad de voz',
            [discord.Permissions.FLAGS.VIEW_AUDIT_LOG]:             'Ver el registro de auditoria',
            [discord.Permissions.FLAGS.VIEW_CHANNEL]:               'Ver canales',
            [discord.Permissions.FLAGS.VIEW_GUILD_INSIGHTS]:        'Ver informacion del servidor'
        };
    
        // Si es String 
        if (typeof content === 'string') return list[content.toUpperCase()];

        // Si es Bigint
        if (typeof content === 'bigint') return list[content];
    
        // Si es Array
        if (Array.isArray(content)) {

            const cache = [];

            for (const inContent of content) {

                cache.push(this.perms(inContent));
            };

            return cache;
        };
    
        // Si no coincide con nada 
        return null;
    };

    /**
     * Verifica si es una URL
     * @param {string} content
     */
    link (content) {

        // Si es String
        if (typeof content === 'string') return RegExp(this.flags.link).test(content.toLowerCase());

        // Si no coincide con nada 
        return null;
    };

    /**
     * Verifica si contiene nsfw
     * @param {string} content
     */
    nsfw (content) {

        // Si es String
        if (typeof content === 'string') return RegExp(this.flags.nsfw).test(content.toLowerCase());
    
        // Si no coincide con nada
        return null;
    };
};