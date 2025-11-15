for(let i=0; i<50; i++){
    console.log(generarCombinacion());
}


function generarCombinacion(){
    let combinacion=new Set();

    while(combinacion.size<6){
        let num=Math.floor(Math.random()*49)+1;
        combinacion.add(num);
    }
    return [...combinacion];

}