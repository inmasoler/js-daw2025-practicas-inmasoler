const elementoResultado = document.getElementById('resultado');
const palabras = pedirPalabra();
mostrarPalabras(palabras);

function pedirPalabra() {
  let palabras = [];
  let palabra = prompt('Dame una palabra: ');

  while (palabra != null) {
    palabras.push(palabra.trim());
    palabra = prompt('Dame una palabra: ');
  }

  return palabras;
}

function ordenarPalabras(palabras) {
  return palabras.toSorted().reverse();
}

function mostrarPalabras(palabras) {
  const listaLimpia = limpiarLista(palabras);
  const listaOrdenada = ordenarPalabras(listaLimpia);

  const mensaje =
    'Estas son las palabras únicas introducidas, en orden alfabético inverso: \n' +
    listaOrdenada.join(', ');

  if (elementoResultado) {
    elementoResultado.innerText = mensaje;
  }
}

function limpiarLista(palabras) {
  const result = {};
  for (let i = 0; i <= palabras.length - 1; i++) {
    result[palabras[i]] = 0;
  }

  return Object.keys(result);
}
