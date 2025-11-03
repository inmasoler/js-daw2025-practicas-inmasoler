const elementoResultado = document.getElementById('resultado');
const palabras = pedirPalabra();
mostrarPalabras(palabras);

function pedirPalabra() {
  let palabras = [];
  let palabra = prompt('Dame una palabra: ');

  while (palabra) {
    palabras.push(palabra.trim().toLowerCase());
    palabra = prompt('Dame una palabra: ');
  }

  return palabras;
}

function ordenarPalabras(resultMap) {
  return Object.entries(resultMap).sort((a, b) => a[1] > b[1]);
}

function mostrarPalabras(palabras) {
  const listaTotal = totalVeces(palabras);
  const listaOrdenada = ordenarPalabras(listaTotal);

  let mensaje =
    'Estas son las palabras introducidas y la cantidad de veces: \n\n';

  for (let i = 0; i < listaOrdenada.length; i++) {
    const clave = listaOrdenada[i][0];
    const veces = listaOrdenada[i][1];
    mensaje += `${clave}: ${veces}\n`;
  }

  if (elementoResultado) {
    elementoResultado.innerText = mensaje;
  } else {
    alert(mensaje);
  }
}

function totalVeces(palabras) {
  const resultMap = {};

  for (let i = 0; i <= palabras.length - 1; i++) {
    const palabra = palabras[i];
    const valorAntiguo = resultMap[palabra] || 0;
    resultMap[palabra] = valorAntiguo + 1;
  }

  return resultMap;
  // devuelve {palabra1: 1, palabra2: 7, palabra3: 5}
}
