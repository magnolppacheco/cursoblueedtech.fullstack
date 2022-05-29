/* Faça o cálculo contrário: Leia um valor inteiro correspondente à 
idade de uma pessoa em dias e informe-a em anos, meses e dias. 
Também considere todo ano com 365 dias e todo mês com 30 dias. */

const prompt = require("prompt-sync")();
console.clear();
console.log('Qual a sua idade em dias?');
let diasvividos = +prompt('');
let anos = (diasvividos/365);
const anos1 = Math.floor(anos); // Arredondando anos
let meses = ((diasvividos%365)/30);
const meses1 = Math.floor(meses); // Arredondando meses
const dias = ((diasvividos%365)%30);
console.log('Você viveu',anos1,'anos,',meses1,'meses e',dias,'dias.');
