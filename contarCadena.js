function contarPalabras(cadena) {
    return cadena.trim().split(/\s+/).length;
}

let texto = "Esta es una cadena de ejemplo con varias palabras";
console.log("Texto:", texto);
console.log("Número de palabras:", contarPalabras(texto));

console.log("Texto vacío:", contarPalabras(""));
console.log("Texto con espacios extra:", contarPalabras("  Hola   mundo  "));
console.log("Texto con una palabra:", contarPalabras("Hola"));