let numeros=[2, 5, 6, 8, 8, 12, 24, 2, 7, 9];

// FORMA 1:
let nuevoSet=new Set();

for(let i=0; i<numeros.length; i++){
    nuevoSet.add(numeros[i]);
}

//FORMA 2:
//let nuevoSet=new Set(numeros);


//Conversión a Array
let nuevoArray=[...nuevoSet];

console.log(nuevoArray);