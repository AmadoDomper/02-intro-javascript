// Arreglos en JS

const arreglo = [1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);
// arreglo2.push(109);

// const arreglo3 = arreglo2.map(num => num*2);
const arreglo3 = arreglo2.map(function(num){
    return num * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);