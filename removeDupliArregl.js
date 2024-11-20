const removerDuplicados = () => {
    const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
    const sinDuplicados = [new Set(numeros)];
    
    console.log("Arreglo sin duplicados:");
    sinDuplicados.forEach(numero => console.log(numero));
}

console.log("Removiendo duplicados del arreglo:");
removerDuplicados();