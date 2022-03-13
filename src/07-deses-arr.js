const personajes = ['Goku', 'Vegeta','Trunks']

// console.log( personaje[0]);

const [ , p2, p3 ] = personajes;

console.log( p2 );
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


const state = ( valor ) => {
    return [valor , () => { console.log('Hola Mundo')}]
}

const arr = state('Goku');

console.log(arr);

const [nombre , setNombre ] = state('Goku');

console.log(nombre);
setNombre();