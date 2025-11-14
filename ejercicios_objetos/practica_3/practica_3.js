function ordenador(marca, modelo, memoria=4, disco=512, pulgadas=17) {
    this.marca=marca;
    this.modelo=modelo;
    this.memoria=memoria;
    this.disco=disco;
    this.pulgadas=pulgadas;
}


ordenador.prototype.toString = function(){
    const resultado= `Marca: ${this.marca} Modelo: ${this.modelo} Memoria: ${this.memoria} Disco: ${this.disco} Pulgadas: ${pulgadas}`
    return resultado;
}

let portatil = new ordenador();

portatil.autonomia = 4;

//sin acabar