const email=document.getElementById("email");
const pass=document.getElementById("pass");
const enviar=document.getElementById("submit")

enviar.addEventListener("click", function(){
    event.preventDefault();

    let validateEmail=checkEmail(email.value);
    let validatePass= checkPass(pass.value);
    cambiarPagina(validateEmail, validatePass);
});

function checkEmail(email){

    if(email.includes("@")){
        if (email.includes(".")){
            return true;
        } else {
            alert("El email es incorrecto. El dominio está incompleto.")
            return false;
        }
    } else {
        alert("El email es incorrecto. No contiene una arroba. No podemos seguir comprobando.")
        return false;
    }
}

function checkPass(password){
    if(password.length <8 || password.length >10){
        alert("La contraseña debe contener entre 8 y 10 caracteres");
        return false;
    } else{
        return true;
    }
}

function cambiarPagina(checkEmail, checkPass){
    if(checkEmail==true && checkPass==true){
        window.location.href="./bienvenida.html"
    }
}