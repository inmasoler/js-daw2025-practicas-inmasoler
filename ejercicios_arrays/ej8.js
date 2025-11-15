let frecuencias = Array(10).fill(0);

for (let i=0; i<10000;i++){

    let num=Math.floor(Math.random()*10)+1;
    frecuencias[num-1]++;
}

for (let i=0; i<10; i++){
    console.log(`Número ${i+1}: ${frecuencias[i]}`);
}
