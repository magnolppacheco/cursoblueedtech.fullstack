/* Utilizando laço, imprima a tabuada do 8 na tela. */

const prompt = require('prompt-sync')();
console.clear();

for (let i = 1; i <= 10; i++) {
    resultado = 8 * i;
    console.log(`${i} x 8 = ${resultado}`);
}
