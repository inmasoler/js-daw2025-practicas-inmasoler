let paises=["España", "Francia", "Alemania", "Italia"];

imprimirPaises(paises);
paises.shift();
imprimirPaises(paises);


function imprimirPaises(paises){
    for(let i=0; i<paises.length;i++){
        console.log(`País ${i}: ${paises[i]}`);
    }
}

