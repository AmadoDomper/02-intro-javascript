import { getHeroeById } from "../bases/08-imp-exp";



// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos después')
//         // resolve();
//         const heroe = getHeroeById(2);
//         console.log("Aqui 1", heroe);
//         // resolve( heroe);
//         reject( heroe);
//     }, 2000);
// });

// promesa.then( (heroeX) => {
//     console.log('Then de la promesa')
//     console.log('heroe', heroeX);
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            // console.log('2 segundos después')
            // resolve();
            const heroe = getHeroeById(id);
            // console.log("Aqui 1", heroe);
            if (heroe){
                resolve( heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            // reject( heroe);
        }, 2000);
    });
};

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);