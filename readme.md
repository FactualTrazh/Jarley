Este es un handler mayormente modular para crear Bots con ``Discord.JS``

| Dependencias          | Version |
|-----------------------|---------|
| discord.js            | 13.2.0  |
| dotenv                | 10.0.0  |
| megadb                | 3.4.0   |

# Estructura de los archivos

### Guardado de los archivos

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

### Creacion de comando para entradas

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
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de entrada (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

### Creacion de comando para mensajes

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
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de mensaje (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar la funcion ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

### Creacion de comando para usuarios

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
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        command: function ({ client, event, loaders, databases, bases, utils }) {

            const messageEmbed = new discord.MessageEmbed()
            .setDescription(`Comando de usuario (${utils.file.name}) ejecutado`)
            .setColor('#FFFFFF');

            // NOTA: No es necesario utilizar ".reply()".
            event.editReply({ embeds: [ messageEmbed ] });
        }
    }
};
```

### Creacion de servicios

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
        // Objeto  | loaders   | El cargador.
        // Objeto  | databases | El gestor de archivos.
        // Objeto  | bases     | El gestor de bases. 
        // Objeto  | utils     | Las herramientas.
        ready: function ({ client, loaders, databases, bases, utils }) {

            console.log(`Servicio ${utils.file.name} ejecutado`);
        }
    }
};
```

### Creacion de eventos

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
    // Objeto  | loaders   | El cargador.
    // Objeto  | databases | El gestor de archivos.
    // Objeto  | bases     | El gestor de bases. 
    // Objeto  | utils     | Las herramientas.
    event: function ({ client, loaders, databases, bases, utils }) {

        console.log(`Evento ${utils.file.name} ejecutado`);
    }
};
```

# Informacion extra

### Indexacion de comandos

Este servicio funciona para indexar los ``Comandos`` que alla ``Eliminado``, ``Creado`` o ``Editado``

_Puede que en algunas ocaciones no detecte los cambios, obligandole a hacer un indexado forzado_

_Ubicado en ``services/indexer``_

### Gestion de prioridades

Este servicio funciona para organizar los archivos cargados por los ``loaders`` con forme a su ``Prioridad``

_Ubicado en ``services/priorities``_

### Carga de eventos

Los eventos que no sean requeridos no se cargaran

_Ubicado en ``core/loaders/files/events.js``_

### Flags predefinidos

| Nombre   | Descripcion                                                                               |
|----------|-------------------------------------------------------------------------------------------|
| priority | _Solo para comandos_, especifica que se debe ejecutar antes que el resto                  |
| hide     | _Solo para comandos_, especifica que se debe crear la ejecucion de forma oculta (Efimera) |