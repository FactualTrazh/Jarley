Este es un handler mayormente modular para crear Bots con la libreria ``discord.js``

| Dependencias | Version |
|--------------|---------|
| discord.js   | 13.3.1  |
| dotenv       | 10.0.0  |
| megadb       | 3.4.0   |

# Estructura

### Orden de los archivos

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

### Crear una aplicacion de tipo comando

El nombre de la carpeta sera el que utilizara la aplicacion (No puede contener espacios)

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'command',

    // La descripcion de la aplicacion.
    description: 'Hello world',

    // La prioridad de la aplicacion ante las otras.
    priority: false,

    // Si los usuarios pueden ejecutar la aplicacion en DM's.
    users: true,

    // Si los usuarios pueden ejecutar la aplicacion en gremios.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  description: 'Hello world',
    //  options: [],
    //  type: 'INPUT_CHAT',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

### Crear una aplicacion de tipo mensaje

El nombre de la carpeta sera el que utilizara la aplicacion

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'message',

    // La prioridad de la aplicacion ante las otras.
    priority: false,

    // Si los usuarios pueden ejecutar la aplicacion en DM's.
    users: true,

    // Si los usuarios pueden ejecutar la aplicacion en gremios.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'MESSAGE',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

### Crear una aplicacion de tipo usuario

El nombre de la carpeta sera el que utilizara la aplicacion

El tipo de aplicacion se obtiene dependiendo de en cual categoria se creo la carpeta de la aplicacion

El esquema se genera segun los valores del archivo principal

```js
const discord = require('discord.js');

module.exports = {

    // El nombre de la aplicacion (Automatico).
    // name: 'test',

    // El tipo de aplicacion (Automatico).
    // type: 'user',

    // La prioridad de la aplicacion ante las otras.
    priority: false,

    // Si los usuarios pueden ejecutar la aplicacion en DM's.
    users: true,

    // Si los usuarios pueden ejecutar la aplicacion en gremios.
    servers: true,

    // Si la aplicacion puede ejecutarse de forma efimera.
    hide: false,

    // Los intentos que necesite la aplicacion.
    intents: [],

    // Las parciales que necesite la aplicacion.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    //
    //  name: 'test',
    //  type: 'USER',
    //  defaultPermission: true
    //},

    // Los eventos de la aplicacion.
    events: {}
};
```

### Crear un servicio

El nombre de la carpeta sera el que utilizara el servicio

```js
module.exports = {

    // El nombre del servicio (Automatico).
    // name: 'test',

    // La prioridad del servicio ante los otros.
    priority: false,

    // Los intentos que necesite el servicio.
    intents: [],

    // Las parciales que necesite el servicio.
    partials: [],

    // Los eventos del servicio.
    events: {}
};
```

### Crear un evento

El nombre de la carpeta sera el que utilizara el evento

```js
module.exports = {

    // El nombre del servicio (Automatico).
    // name: 'test',

    // La prioridad del servicio ante los otros.
    priority: false,

    // Los intentos que necesite el servicio.
    intents: [],

    // Las parciales que necesite el servicio.
    partials: [],

    // El evento del evento.
    event: function() {}
};
```

# Servicios prefabricados 

### Indexer

Funciona para indexar las ``Aplicaciones`` creadas, eliminadas o editadas

> _Puede que en algun momento no se realize la indexacion_