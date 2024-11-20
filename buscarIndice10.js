const buscarIndice = (arreglo, valorBuscado) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            return i;
        }
    }
    return -1;
}

// Ejemplo de uso
let numeros = [10, 20, 30, 40, 50];
let valorBuscar = 30;

console.log("Arreglo:", numeros);
console.log("Buscando valor:", valorBuscar);
console.log("Índice encontrado:", buscarIndice(numeros, valorBuscar));