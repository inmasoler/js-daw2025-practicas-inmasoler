const form = document.getElementById('form');
const contenido = document.getElementById('contentProduct');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numProducto = document.getElementById('numProducto').value;
    const statusDisplay = document.getElementById('status');

    fetch(`https://dummyjson.com/products/${numProducto}`)
        .then((response) => {
            if (!response.ok) {
                statusDisplay.innerText = response.status;
                throw new Error(
                    'Error en la respuesta del servidor, código: ' +
                    response.status
                );
            }

            return response.json();
        })

        .then(producto => {

            const title = producto.title;
            const id = producto.id;
            const price = producto.price;

            document.getElementById('nombre').innerText = `Title: ${title}`;
            document.getElementById('id').innerText = `ID: ${id}`;
            document.getElementById('precio').innerText = `Precio: ${price}`;

            const datos = {
                id: id,
                title: title,
                price: price
            };

            return fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            })
        })

        .then(responsePost => {
            if (responsePost.ok) {
                statusDisplay.innerText = "200";
                return responsePost.json();
            } else {
                throw new Error(`HTTP error! status: ${responsePost.status}`);
            }
        })

        .then(resultadoServidor => {
            const nombreDevuelto = resultadoServidor.json.title;
            document.getElementById('nombreProdServidor').innerText = "Nombre del producto deuvelto por POST: " + nombreDevuelto;

            form.classList.add("hidden");
            contenido.classList.remove("hidden");

        })



        .catch((error) => {
            console.error('Error en la petición:', error);
        })

});
