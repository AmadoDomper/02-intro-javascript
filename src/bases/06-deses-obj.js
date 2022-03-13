//Desestructuración

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const {nombre: nombre2, edad, clave} = persona;

console.log( nombre2 );
console.log( edad );
console.log( clave );

const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {
    console.log( nombre, edad, rango);
}

retornaPersona( persona );

const retornaPersona2 = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.123,
            lng: -12.325
        }
    }
}

const {nombreClave, anios, lating: {lat, lng}} = retornaPersona2( persona );

console.log(nombreClave, anios);
console.log(lat, lng);
