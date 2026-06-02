const numeros = [10, 25, 30, 47, 50, 63, 70, 81, 90, 15, 100, 22, 35, 40, 55];

alert("Vetor: " + numeros);

let resultado = "Posições dos múltiplos de 10:\n";

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 10 == 0) {
        resultado += i + "\n";
    }
}

alert(resultado);