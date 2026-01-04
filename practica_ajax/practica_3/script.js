const form = document.getElementById('form');
const container = document.getElementById('mapContainer');
const imgMapa = document.getElementById('mapaMeteorologico');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const apikey = document.getElementById('apikey').value;
    const urlBase = `https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=${apikey}`;

    fetch(urlBase)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor, código: ' + response.status);
            }

            return response.json();
        })

        .then((datosRecibidos) => {
            const imagenUrl = datosRecibidos.datos;

            imgMapa.src = imagenUrl;

            form.classList.add("hidden");
            container.classList.remove("hidden");
        })

        .catch(error => {
            console.error("Hubo un problema:", error);
            alert("No se pudo cargar el mapa. Revisa tu API Key.");
        });
});