Este es un handler mayormente modular para crear Bots con la libreria ``discord.js``

| Dependencias | Version |
|--------------|---------|
| discord.js   | 13.3.1  |
| dotenv       | 10.0.0  |
| megadb       | 3.4.0   |

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

    // El tipo de comando (Se crea automaticamente)
    // type: 'input',

    // La descripcion del comando
    description: 'Comando de prueba',

    // Los intents que necesita el comando.
    intents: [],
    
    // Las banderas para expecificar valores.
    flags: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  description: 'Comando de prueba',
    //  options: [],
    //  type: 'INPUT_CHAT',
    //  defaultPermission: true
    //},

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // client    | El cliente.
        // event     | El evento.
        // loaders   | El cargador.
        // databases | El gestor de archivos.
        // bases     | El gestor de bases. 
        // utils     | Las herramientas.
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

    // El tipo de comando (Se crea automaticamente)
    // type: 'message',

    // Los intents que necesita el comando.
    intents: [],
    
    // Las banderas para expecificar valores.
    flags: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  type: 'MESSAGE',
    //  defaultPermission: true
    //},

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // client    | El cliente.
        // event     | El evento.
        // loaders   | El cargador.
        // databases | El gestor de archivos.
        // bases     | El gestor de bases. 
        // utils     | Las herramientas.
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

    // El tipo de comando (Se crea automaticamente)
    // type: 'user',

    // Los intents que necesita el comando.
    intents: [],
    
    // Las banderas para expecificar valores.
    flags: [],

    // El esquema del comando (Se crea automaticamente).
    // schema: {
    //
    //  name: 'test',
    //  type: 'USER',
    //  defaultPermission: true
    //},

    // Los eventos a utilizar de la carpeta "events".
    events: {

        // client    | El cliente.
        // event     | El evento.
        // loaders   | El cargador.
        // databases | El gestor de archivos.
        // bases     | El gestor de bases. 
        // utils     | Las herramientas.
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

        // client    | El cliente.
        // loaders   | El cargador.
        // databases | El gestor de archivos.
        // bases     | El gestor de bases. 
        // utils     | Las herramientas.
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
    // client    | El cliente.
    // loaders   | El cargador.
    // databases | El gestor de archivos.
    // bases     | El gestor de bases. 
    // utils     | Las herramientas.
    event: function ({ client, loaders, databases, bases, utils }) {

        console.log(`Evento ${utils.file.name} ejecutado`);
    }
};
```

# Servicios prefabricados 

### Indexer

Este servicio funciona para indexar los ``Comandos`` que alla ``Eliminado``, ``Creado`` o ``Editado``

_Puede que en algunas ocaciones no detecte los cambios, obligandole a hacer un indexado forzoso_

# Banderas predefinidas

| Nombre    | Descripcion                                                                 |
|-----------|-----------------------------------------------------------------------------|
| ephemeral | _Solo para comandos_, especifica que se debe ejecutar como oculto (Efimero) |