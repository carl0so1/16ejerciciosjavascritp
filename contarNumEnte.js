
function contarPares(arreglo) {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log("Arreglo de números:");
console.log(numeros);

console.log("Contando números pares en el arreglo:");
let cantidadPares = contarPares(numeros);
console.log(`Hay ${cantidadPares} números pares en el arreglo.`);
