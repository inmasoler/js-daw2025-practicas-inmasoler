
let punto1=new defPunto(5,8);
let punto2=new defPunto(6, 16);
let punto3=punto1.sumar(punto2);


function defPunto(coord1, coord2){
    if(!isNaN(coord1)){
        this.x=coord1;
    } else {
        this.x=0;
    }

    if(!isNaN(coord2)){
        this.y=coord2;
    } else {
        this.y=0;
    }
}

defPunto.prototype.cambiar=function (newNum1, newNum2){
    this.x=newNum1;
    this.y=newNum2;
}
defPunto.prototype.copiar=function(){
    let nuevaX=this.x;
    let nuevaY=this.y;

    let copiaPunto=new defPunto(nuevaX, nuevaY);

    return copiaPunto;
}
defPunto.prototype.sumar=function(puntoB){
    let nuevaX=this.x + puntoB.x;
    let nuevaY=this.y + puntoB.y;

    return new defPunto(nuevaX, nuevaY);
}









