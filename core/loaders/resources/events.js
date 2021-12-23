let readeds = require('./readeds.js');

let cache = {};

for (let _file of readeds.events) {

    let applications = readeds.applications.filter((val) => val.events[_file.name]);
    let services     = readeds.services.filter((val) => val.events[_file.name]);
    let all          = applications.concat(services);

    // Salta la carga si el evento no es requido
    if (!all.length) continue;

    // Carga el evento
    cache[_file.name] = { applications, services, all };
};

// Exporta los eventos
module.exports = cache;