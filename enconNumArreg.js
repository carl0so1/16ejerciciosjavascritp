function numeroMasGrande(arreglo) {
    return Math.max(...arreglo);
}

let numeros = [10, 5, 8, 23, 1, 16, 42, 3];
console.log("Arreglo:", numeros);
console.log("Número más grande:", numeroMasGrande(numeros));