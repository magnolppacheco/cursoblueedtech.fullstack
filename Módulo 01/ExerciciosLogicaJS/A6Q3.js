/* Faça um programa em que o usuário escolha a quantidade de 
alunos a serem cadastrados e peça o nome e nota de cada um. 
Armazene as informações em duas listas separadas e no final 
imprima o nome e a nota correspondente de cada aluno, e a média 
total da notas. */

const prompt = require('prompt-sync')();
console.clear();

let arrayalunos = [];
let arraynotas = [];
let contador = 0;
console.log('Digite a quantidade alunos:');
let quantidadealunos = +prompt('');
console.log();

// Usando while para tratar os dados de entrada
// garantir que a quantidade de alunos será um numer e não uma string.
while (!quantidadealunos) {
    console.log(`Caracteres não identificados. 
Por favor, digite um número válido`);
    quantidadealunos = +prompt('');
}

// usando while para colocar os inputs nos arrays
while (contador < quantidadealunos) {
    console.log('Digite o nome do aluno(a):');
    nomealuno = prompt('').toLowerCase();
    arrayalunos.push(nomealuno);
    console.log(`Agora digite a nota do aluno(a) ${nomealuno}:`);
    let notaaluno = +prompt('');

    while (!notaaluno) {
        console.log('Caracteres não identificados.');
        console.log('Por favor, digite um número válido');
        notaaluno = +prompt('');
    }
    arraynotas.push(notaaluno);
    contador++;
    console.log();
}

/// Mostrando na tela as notas dos respectivos alunos
for (let i = 0; i < quantidadealunos; i++) {
    console.log(`Aluno: ${arrayalunos[i]}. Nota: ${arraynotas[i]}.`);
}

// for para somar todos os itens dentro do array
let somafinal = 0;
for (let a = 0; a < arraynotas.length; a++) {
    somafinal += arraynotas[a];
}
let mediatotal = (somafinal / quantidadealunos).toFixed(2);
console.log();
console.log(`Média das notas dos alunos: ${mediatotal}.`);
