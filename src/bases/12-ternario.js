const activo = true;

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( activo ) ? 'Activo' : null;
const mensaje = activo === true && 'Activo';

console.log(mensaje);