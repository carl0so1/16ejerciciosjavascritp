
function convertirMayusculas() {
    // Arreglo de ejemplo con nombres
    const nombres = ["juan", "maría", "pedro", "ana", "luis"];
    
    // Convertir a mayúsculas e imprimir cada nombre
    console.log("Nombres en mayúsculas:");
    for (let i = 0; i < nombres.length; i++) {
        const nombreMayuscula = nombres[i].toUpperCase();
        console.log(nombreMayuscula);
    }
}

// Llamada a la función
console.log("Convirtiendo nombres a mayúsculas:");
convertirMayusculas();