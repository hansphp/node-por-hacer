const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
        // return new Promise((resolve, reject) => {
    fs.writeFile('db/data.json', data, 'utf8', (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
    // });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (description) => {
    cargarDB();

    let porHacer = {
        description,
        completed: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (description, completed = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === description
    });

    if (index >= 0) {
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (description) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.description !== description);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}