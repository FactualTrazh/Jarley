Este es un handler mayormente modular para crear Bots con ``Discord.JS``

| Dependencias          | Version | Opcional | Experimental |
|-----------------------|---------|----------|--------------|
| discord.js            | 13.2.0  |          |              |
| dotenv                | 10.0.0  |          |              |
| megadb                | 3.4.0   |          |              |
| @tensorflow/tfjs-node | 3.10.0  | Si       | Si           |

## Estructura

#### Guardado

Los archivos deben estar dentro de una carpeta y contener un archivo llamado ``main.js``

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

#### Comando para entradas

```js
const discord = require('discord.js');

module.exports = {

    // El nombre del comando (Se utiliza el nombre de la carpeta automaticamente).
    // name: 'test',

    // La descripcion del comando.
    description: 'Comando de prueba',

    // Las opciones del comando.
    options: [],

    // Los intents que necesita el comando.
    intents: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  description: 'Comando de prueba',
    //  options: [],
    //  type: 'INPUT_CHAT',
    //  defaultPermission: true
    //},
    
    // Las banderas para expecificar valores.
    flags: [],

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // Objeto  | client    | El cliente.
        // Objeto  | event     | El evento.
        // Funcion | tensor    | El gestor de IAs.
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, tensor, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de entrada (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Comando para mensajes

```js
const discord = require('discord.js');

module.exports = {

    // El nombre del comando (Se utiliza el nombre de la carpeta automaticamente).
    // name: 'test',

    // Los intents que necesita el comando.
    intents: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  type: 'MESSAGE',
    //  defaultPermission: true
    //},
    
    // Las banderas para expecificar valores.
    flags: [],

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // Objeto  | client    | El cliente.
        // Objeto  | event     | El evento.
        // Funcion | tensor    | El gestor de IAs.
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, tensor, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de mensaje (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar la funcion ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Comando para usuarios

```js
const discord = require('discord.js');

module.exports = {

    // El nombre del comando (Se utiliza el nombre de la carpeta automaticamente).
    // name: 'test',

    // Los intents que necesita el comando.
    intents: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  type: 'USER',
    //  defaultPermission: true
    //},
    
    // Las banderas para expecificar valores.
    flags: [],

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // Objeto  | client    | El cliente.
        // Objeto  | event     | El evento.
        // Funcion | tensor    | El gestor de IAs.
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, tensor, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de usuario (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

#### Servicio

```js
module.exports = {

    // El nombre del servicio (Se utiliza el nombre de la carpeta automaticamente).
    // name: 'test',

    // Los intents que necesita el servicio.
    intents: [],
    
    // Las banderas para expecificar valores.
    flags: [],

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // Objeto  | client    | El cliente.
        // Funcion | tensor    | El gestor de IAs.
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        ready: function ({ client, tensor, loaders, databases, bases, utils }) {

            console.log(`Servicio ${utils.file.name} ejecutado`);
        }
    }
};
```

#### Evento

```js
module.exports = {

    // El nombre del evento (Se utiliza el nombre de la carpeta automaticamente).
    // name: 'test',

    // Los intents que necesita el evento.
    intents: [],
    
    // Las banderas para expecificar valores.
    flags: [],

    // Funcion que se ejecuta al ser cargado el evento.
    // Objeto  | client    | El cliente.
    // Funcion | tensor    | El gestor de IAs.
    // Objeto  | loaders   | El cargador.
    // Objeto  | databases | El gestor de archivos.
    // Objeto  | bases     | El gestor de bases. 
    // Objeto  | utils     | Las herramientas.
    event: function ({ client, tensor, loaders, databases, bases, utils }) {

        console.log(`Evento ${utils.file.name} ejecutado`);
    }
};
```

## Extra

#### Servicio (Indexer)

El servicio ``Indexer`` funciona para indexar los ``Comandos`` que fueron ``Eliminados``, ``Creados`` o ``Renombrados``

_Por limitaciones no se pueden identificar ``Comandos`` editados_

#### Servicio (Priorities)

El servicio ``Priorities`` funciona para organizar los archivos cargados por los ``loaders`` con forme a su ``Prioridad``

_Para especificar que un archivo es prioridad, debe agregar ``priority`` en sus ``flags``_