const usuarios=new Map();

usuarios.set("Paco", 43);
usuarios.set("María", 24);
usuarios.set("Roberto", 82);
usuarios.set("Pepe", 75);
usuarios.set("Laura", 19);

usuarios.set("María", 26);

for(let [nombre, edad] of usuarios){
    console.log(`Nombre: ${nombre} Edad: ${edad}`);
}