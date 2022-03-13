const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 546413231,
        lat: 14.366526,
        lng: 34.565323,
    }
};

// console.table({persona});
// console.table(persona.direccion);
// console.log({persona});



const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);