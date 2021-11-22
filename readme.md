Este es un handler mayormente modular para crear Bots con la libreria ``discord.js``

| Dependencias | Version |
|--------------|---------|
| discord.js   | 13.3.1  |
| dotenv       | 10.0.0  |
| megadb       | 3.4.0   |

# Estructura

### Orden de archivos

Cree las carpetas ``events``, ``services`` y ``applications`` junto a sus subcarpetas ``commands``, ``messages`` y ``users`` para evitar errores

```
applications\
|
|__ commands\
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

### Crear aplicaciones del tipo comando

El nombre de la carpeta sera el que utilizara la aplicacion (No puede contener espacios)

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // Nombre (Automatico).
    // name: 'test',

    // Tipo (Automatico).
    // type: 'command',

    // Descripcion.
    description: 'Hello world',

    // Prioridad.
    priority: false,

    // Intentos.
    intents: [],

    // Parciales.
    partials: [],
    
    // Banderas.
    flags: [],

    // Esquema (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  description: 'Hello world',
    //  options: [],
    //  type: 'INPUT_CHAT',
    //  defaultPermission: true
    //},

    // Eventos.
    events: {}
};
```

### Crear aplicaciones del tipo mensaje

El nombre de la carpeta sera el que utilizara la aplicacion

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // Nombre (Automatico).
    // name: 'test',

    // Tipo (Automatico).
    // type: 'message',

    // Prioridad.
    priority: false,

    // Intentos.
    intents: [],

    // Parciales.
    partials: [],
    
    // Banderas.
    flags: [],

    // Esquema (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'MESSAGE',
    //  defaultPermission: true
    //},

    // Eventos.
    events: {}
};
```

### Crear aplicaciones del tipo usuario

El nombre de la carpeta sera el que utilizara la aplicacion

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // Nombre (Automatico).
    // name: 'test',

    // Tipo (Automatico).
    // type: 'user',

    // Prioridad.
    priority: false,

    // Intentos.
    intents: [],

    // Parciales.
    partials: [],
    
    // Banderas.
    flags: [],

    // Esquema (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'USER',
    //  defaultPermission: true
    //},

    // Eventos.
    events: {}
};
```

### Crear servicios

El nombre de la carpeta sera el que utilizara el servicio

```js
module.exports = {

    // Nombre (Automatico).
    // name: 'test',

    // Prioridad.
    priority: false,

    // Intentos.
    intents: [],

    // Parciales.
    partials: [],
    
    // Banderas.
    flags: [],

    // Eventos.
    events: {}
};
```

### Crear eventos

El nombre de la carpeta sera el que utilizara el evento

```js
module.exports = {

    // Nombre (Automatico).
    // name: 'test',

    // Prioridad.
    priority: false,

    // Intentos.
    intents: [],

    // Parciales.
    partials: [],
    
    // Banderas.
    flags: [],

    // Evento.
    event: function () {}
};
```

# Servicios prefabricados 

### Indexer

Funciona para indexar las ``Aplicaciones`` creadas, eliminadas o editadas

> _Puede que en algun momento no se realize la indexacion_

# Banderas predefinidas

| Nombre | Para                          | Descripcion                                           |
|--------|-------------------------------|-------------------------------------------------------|
| hide   | Aplicaciones del tipo comando | especifica que se debe ejecutar como oculto (Efimero) |
| server | Aplicaciones del tipo comando | especifica que puede ejecutar en chats de servidores  |
| user   | Aplicaciones del tipo comando | especifica que puede ejecutar en chats de usuarios    |