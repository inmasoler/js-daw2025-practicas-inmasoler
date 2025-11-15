let letras=new Array();

letras=["A", "B", "C"];
letras.splice(3,0,"D");
letras.splice(4,0,"E");

letras.shift();
letras.pop();

imprimirLetras(letras);

function imprimirLetras(letras){
    for(let i=0; i<letras.length;i++){
        console.log(`País ${i}: ${letras[i]}`);
    }
}

