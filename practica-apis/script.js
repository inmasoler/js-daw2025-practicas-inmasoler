const cuentaAtras = document.getElementById("cuentaAtras");
const video = document.getElementById("video");
const textoVideo = document.getElementById("textoVideo");


function convertir(segundosTotal) {
    const minutos = Math.floor(segundosTotal / 60);
    const segundos = segundosTotal % 60;
    return { minutos, segundos };
}


if (cuentaAtras) {

    function temporizador(counter) {
        if (counter > 0) {
            cuentaAtras.innerText = counter;
            setTimeout(() => {
                temporizador(counter - 1);
            }, 1000);
        } else {
            cuentaAtras.innerText = 0;
        }
    }

    function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms)
        })
    };

    temporizador(5);
    timeout(5000).then(() => {
        let respuesta = confirm("Ha salido un nuevo vídeo");
        if (respuesta) {
            window.location.href = "video.html";
        }
    });



}



if (video) {
    video.addEventListener("click", (event) => {
        if (video.paused) video.play();
        else video.pause();
    });

    video.addEventListener("contextmenu", (event) => {
        event.preventDefault();

        if (!isNaN(video.duration)) {
            let segundosTotal = Math.floor(video.duration);

            let tiempo = convertir(segundosTotal);
            textoVideo.innerText = `El video dura ${tiempo.minutos} minutos y ${tiempo.segundos} segundos.`;
        }
    });
}

