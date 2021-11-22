const readeds = require('./readeds.js');

const cache = {};

for (const _file of readeds.events) {

    const applications = readeds.applications.filter((val) => val.events[_file.name]);
    const services     = readeds.services.filter((val) => val.events[_file.name]);
    const all          = applications.concat(services);

    // Salta la carga si el evento no es requido
    if (!all.length) continue;

    // Carga el evento
    cache[_file.name] = { applications, services, all };
};

// Exporta los eventos
module.exports = cache;