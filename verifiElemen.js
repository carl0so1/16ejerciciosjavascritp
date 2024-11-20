function elementoEnArreglo(arreglo, elemento) {
    return arreglo.includes(elemento);
}

let numeros = [1, 2, 3, 4, 5];
let numeroBuscado = 3;

console.log("Arreglo:", numeros);
console.log(`¿El número ${numeroBuscado} está en el arreglo?`, elementoEnArreglo(numeros, numeroBuscado));

