Este es un handler mayormente modular para crear Bots con ``Discord.JS``

| Dependencias | Version | | Motores | Version |
|--------------|---------|-|---------|---------|
| discord.js   | 13.2.0  | | Node    | 16.11.1 |
| dotenv       | 10.0.0  | |         |         |
| megadb       | 3.4.0   | |         |         |

## Estructuras

#### Guardar

Los archivos deben estar dentro de una carpeta y contener un archivo llamado ``main.js``

_Los nombres de las carpetas seran los utilizados_

_las carpetas con nombres iguales seran ignorados_

```
commands\
|
|__ inputs\
|   |
|   |__ test\
|       |
|       |__ main.js
|
|__ messages\
|   |
|   |__ test\
|       |
|       |__ main.js
|
|__ users\
    |
    |__ test\
        |
        |__ main.js

services\
|
|__ test\
    |
    |__ main.js

events\
|
|__ test\
    |
    |__ main.js

```

#### Comandos de entrada

```js
const discord = require('discord.js');

module.exports = {

    // Este valor utiliza el nombre de la carpeta automaticamente.
    // name: 'test',

    // Este valor es la descripcion del comando que se mostrara al poner "/".
    description: 'Comando de prueba',

    // Este valor son las opciones del comando que se mostrara al poner "/".
    options: [],

    // Este valor son los intents que necesita tu comando para funcionar.
    intents: [],

    // Este valor son las configuraciones para el servicio "indexer" y se cambia automaticamente.
    // show: {
    //
    //  name: 'test',
    //  description: 'Comando de prueba',
    //  options: [],
    //  type: 'INPUT_CHAT'
    //},
    
    // Este valor especifica si debe estar entre los primeros en cargarse.
    priority: false,

    // Aqui iran todos los eventos que alla en "events\".
    events: {

        // Objeto | client    | El cliente.
        // Objeto | event     | El evento.
        // Objeto | loader    | El gestor de archivos.
        // Objeto | databases | El gestor de datos.
        // Objeto | bases     | El gestor de bases. 
        // Objeto | utils     | Las herramientas configuradas.
        command: function ({ client, event, loader, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de entrada (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Comandos de mensajes

```js
const discord = require('discord.js');

module.exports = {

    // Este valor utiliza el nombre de la carpeta automaticamente.
    // name: 'Prueba para mensaje',

    // Este valor son los intents que necesita tu comando para funcionar.
    intents: [],

    // Este valor son las configuraciones para el servicio "indexer" y se cambia automaticamente.
    // show: {
    //
    //  name: 'Prueba para mensaje',
    //  type: 'MESSAGE'
    //},
    
    // Este valor especifica si debe estar entre los primeros en cargarse.
    priority: false,

    // Aqui iran todos los eventos que alla en "events\".
    events: {

        // Objeto | client    | El cliente.
        // Objeto | event     | El evento.
        // Objeto | loader    | El gestor de archivos.
        // Objeto | databases | El gestor de datos.
        // Objeto | bases     | El gestor de recursos. 
        // Objeto | utils     | Las herramientas configuradas.
        command: function ({ client, event, loader, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de mensaje (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Comandos de usuarios

```js
const discord = require('discord.js');

module.exports = {

    // Este valor utiliza el nombre de la carpeta automaticamente.
    // name: 'Prueba para usuario',

    // Este valor son los intents que necesita tu comando para funcionar.
    intents: [],

    // Este valor son las configuraciones para el servicio "indexer" y se cambia automaticamente.
    // show: {
    //
    //  name: 'Prueba para usuario',
    //  type: 'USER'
    //},
    
    // Este valor especifica si debe estar entre los primeros en cargarse.
    priority: false,

    // Aqui iran todos los eventos que alla en "events\".
    events: {

        // Objeto | client    | El cliente.
        // Objeto | event     | El evento.
        // Objeto | loader    | El gestor de archivos.
        // Objeto | databases | El gestor de datos.
        // Objeto | bases     | El gestor de bases. 
        // Objeto | utils     | Las herramientas configuradas.
        command: function ({ client, event, loader, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de usuario (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Servicios

```js
module.exports = {

    // Este valor utiliza el nombre de la carpeta automaticamente.
    // name: 'test',

    // Este valor son los intents que necesita tu servicio para funcionar.
    intents: [],
    
    // Este valor especifica si se tiene que cargar antes que el resto.
    priority: false,

    // Aqui iran todos los eventos que alla en "events\".
    events: {

        // Objeto | client    | El cliente.
        // Objeto | loader    | El gestor de archivos.
        // Objeto | databases | El gestor de datos.
        // Objeto | bases     | El gestor de bases. 
        // Objeto | utils     | Las herramientas configuradas.
        ready: function ({ client, loader, databases, bases, utils }) {

            console.log(`Servicio ${utils.file.name} ejecutado`);
        }
    }
};
```

#### Eventos

```js
module.exports = {

    // Este valor utiliza el nombre de la carpeta automaticamente.
    // name: 'test',

    // Este valor son los intents que necesita tu eventos para funcionar.
    intents: [],
    
    // Este valor especifica si se tiene que cargar antes que el resto.
    priority: false,

    // Aqui ira el evento.
    // Objeto | client    | El cliente.
    // Objeto | loader    | El gestor de archivos.
    // Objeto | databases | El gestor de datos.
    // Objeto | bases     | El gestor de bases. 
    // Objeto | utils     | Las herramientas configuradas.
    event: function ({ client, loader, databases, bases, utils }) {

        console.log(`Evento ${utils.file.name} ejecutado`);
    }
};
```

## Indexado automatico

El indexado de ``Comandos`` se realiza cuando uno o varios ``Comandos`` fueron ``Eliminados``, ``Creados`` o ``Renombrados``

_Por limitaciones no se pueden identificar ``Comandos`` editados_