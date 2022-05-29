/* Faça um programa para a leitura de quatro notas parciais de um aluno. 
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco. */

const prompt = require("prompt-sync")();
console.clear();

console.log('Digite a primeira nota:');
let n1 = +prompt('');
console.log('Digite a segunda nota:');
let n2 = +prompt('');
console.log('Digite a terceira nota:');
let n3 = +prompt('');
console.log('Digite a quarta nota:');
let n4 = +prompt('');

let nt = (n1+n2+n3+n4)/4; // Cálculo da média final

if(nt>=7){
    console.log('APROVADO!');
}
else if(nt >= 5 && nt < 7){
    console.log('RECUPERAÇÃO!');
}
else{
    console.log('REPROVADO!');
};
