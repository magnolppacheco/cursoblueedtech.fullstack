/* Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';
Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar. */

const prompt = require('prompt-sync')();
console.clear();
let nome;
let idade;
let salario;
let estadocivil;

console.log(`Olá, necessitamos que forneça alguns dados pessoais para confirmação de identidade.
Deseja continuar?`);
let soun = prompt('').toLowerCase();

if (soun === 'sim') {
    console.log('Ok, vamos começar!');
    console.log('Digite seu nome:');
    nome = prompt('').toLowerCase();
    while (nome.length < 3) {
        console.log('Digite um nome com até 3 caracteres:');
        nome = prompt('');}

    console.log('Agora digite sua idade:');
    idade = +prompt('');
    while (idade <= 0 || idade >= 150) {
        console.log('Sua idade não corresponde a uma idade real.');
        console.log('Por favor, digite novamente.');
        idade = +prompt('');}

    console.log('Digite o valor do seu salário:');
    salario = +prompt('');
    while (salario <= 0) {
        console.log('Digite um valor de salário válido.');
        salario = +prompt('');}
        
    console.log('Digite seu estado civil:');
    console.log('Use "s" para solteiro(a), "c" para casado(a),');
    console.log('"v" para viúvo(a) ou "d" para divorciado(a).');
    estadocivil = prompt('').toLowerCase();
    while (
        estadocivil != 's' &&
        estadocivil != 'c' &&
        estadocivil != 'v' &&
        estadocivil != 'd' ) {
        console.log('Digite s, c, v, d.');
        estadocivil = prompt('').toLowerCase();}

    console.log('Obrigado por fornecer seus dados. Estamos validando as informações.');
} else {
    console.log('Agradecemos sua atenção, até mais!');
}
