function sumarArreglo(miArreglo) {
    return miArreglo.reduce((suma, num) => suma + num, 0);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
console.log("Arreglo:", numeros);
console.log("Suma:", sumarArreglo(numeros));
