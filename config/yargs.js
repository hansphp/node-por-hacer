const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const complete = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        complete
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}