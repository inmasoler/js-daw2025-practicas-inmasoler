Array.prototype.mediaAritmetica = function() {
    return this.reduce((old, current) =>  old + current, 0) / this.length;
}

const arrayEjemplo = [1,2,4,6,7].mediaAritmetica()
console.log(arrayEjemplo)