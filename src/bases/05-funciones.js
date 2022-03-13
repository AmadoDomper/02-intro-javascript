const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

// console.log(saludar('Amado'));
console.log(saludar('Amado'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));

const getUser = () => {
    return {
        uid: 'ABC1231',
        username: 'El_XXX123'
    }
}

const getUser2 = () => 
    ({
        uid: 'ABC1231',
        username: 'El_XXX123'
    })

console.log(getUser())
console.log(getUser2())


const UsuarioActivo = ( nombre ) =>
    ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = UsuarioActivo('Amado');
console.log(usuarioActivo);