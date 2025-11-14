const container=document.getElementById("container");

window.addEventListener("keydown", cambiarContainer)

function cambiarContainer(event){
    if(event.altKey && event.key=="F12"){
        container.style.backgroundImage= 'url("https://images.unsplash.com/photo-1762544968153-b9b47435fefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    }
}