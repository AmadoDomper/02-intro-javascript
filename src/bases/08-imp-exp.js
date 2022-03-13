// import { heroes } from './data/heores'

import heroes, { owners} from "../data/heores";

console.log(owners);

// import { heroes } from "./data/heores";

// const getHeroeById = (id) => {
//     return heroes.find( heroe => heroe.id === id);
// }

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

console.log( getHeroeById(2));
console.log( getHeroeById(3));

const getHeroesByOwner = ( owner) => heroes.filter( heroe => heroe.owner === owner);

console.log( getHeroesByOwner('DC'));