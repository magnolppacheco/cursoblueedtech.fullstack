/*Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média ponderada do aluno, sabendo 
que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.*/

const prompt = require("prompt-sync")();
console.clear();
console.log('Digite a primeira nota do aluno:');
let notaA = +prompt('');
console.log('Digite a segunda nota do aluno:');
let notaB = +prompt('');
const notafinal = (((notaA*4)+(notaB*6))/(4+6));// Fórmula da média ponderada
console.log('A média do aluno é:', notafinal);
