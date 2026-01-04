fetch('https://randomuser.me/api/')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(
                'Error en la respuesta del servidor, código: ' +
                response.status
            );
        }
    })
    .then(data => {
        const listaUsuarios = data.results;
        const usuario = listaUsuarios[0];

        const nombre_completo = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const imagen = usuario.picture.medium;
        const direccion = `${usuario.location.street.number} ${usuario.location.street.name}`;
        const pais = usuario.location.country;

        document.getElementById('nombre_completo').innerText = nombre_completo;
        document.getElementById('email').innerText = email;
        document.getElementById('imagen').src = imagen;
        document.getElementById('direccion').innerText = direccion;
        document.getElementById('pais').innerText = pais;
        document.getElementById('imagen').alt = nombre_completo;
    })
    .catch((error) => {
        console.error('Error en la petición:', error);
    })