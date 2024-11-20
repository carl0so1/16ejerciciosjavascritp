// Función flecha simple
const invertirArreglo = () => {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = [];
    
    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado.push(numeros[i]);
    }
    return resultado;
};

// Ejemplo de uso
console.log("Arreglo original:", [1, 2, 3, 4, 5]);
console.log("Arreglo invertido:", invertirArreglo());