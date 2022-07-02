/*                              Projeto do Módulo 0 - Detetive
Este jogo deve funcionar da seguinte forma:
O programa deve fazer 5 perguntas ao usuário com respostas de sim ou não.
Caso o usuário responda sim a 4 perguntas ou mais, devemos retornar que ele é culpado.
Caso o usuário responda sim a 3 perguntas, devemos retornar que ele é suspeito.
Caso o usuário responda sim a 2 perguntas ou menos, devemos retornar que ele é inocente. */

const prompt = require("prompt-sync")();
console.clear();

console.log("Olá!Como você se chama?");
const nomejogador = prompt("");
console.log("");
console.log("Gostaria de jogar o jogo chamado Detetive?");
console.log('Responda as perguntas apenas com "sim" ou "não".');
let resposta1 = prompt("").toLowerCase();
console.log();

while (resposta1 != "sim" && resposta1 != "nao") {
  console.log("Desculpe, sua resposta não faz sentido!");
  console.log('Responda apenas com "sim" ou "não".');
  console.log("Gostaria de jogar o jogo chamado Detetive?");
  resposta1 = prompt("").toLowerCase();
  console.log();
}

if (resposta1 == "sim") {
  console.log('Iniciaremos a primeira rodada do jogo "Detetive".');
  console.log();
  console.log(`Os jogadores são Ana, Gaby, Pedro e ${nomejogador}.`);
  console.log();
  console.log("Ana foi a vítima da rodada.");
  console.log();
  console.log("Você presenciou algum comportamento suspeito?");
  let p1 = prompt("").toLowerCase();
  console.log();

  while (p1 != "sim" && p1 != "nao") {
    console.log("Desculpe, sua resposta não faz sentido!");
    console.log('Responda apenas com "sim" ou "não".');
    console.log("Você presenciou algum comportamento suspeito?");
    p1 = prompt("").toLowerCase();
    console.log();
  }

  console.log("Você tocou a arma do crime?");
  let p2 = prompt("").toLowerCase();
  console.log();

  while (p2 != "sim" && p2 != "nao") {
    console.log("Desculpe, sua resposta não faz sentido!");
    console.log('Responda apenas com "sim" ou "não".');
    console.log("Você tocou a arma do crime?");
    p2 = prompt("").toLowerCase();
    console.log();
  }

  console.log("Você estava presente quando a vítima foi encontrada?");
  let p3 = prompt("").toLowerCase();
  console.log();

  while (p3 != "sim" && p3 != "nao") {
    console.log("Desculpe, sua resposta não faz sentido!");
    console.log('Responda apenas com "sim" ou "não".');
    console.log("Você estava presente quando a vítima foi encontrada?");
    p3 = prompt("").toLowerCase();
    console.log();
  }

  console.log("Você conhecia a vítima?");
  let p4 = prompt("").toLowerCase();
  console.log();

  while (p4 != "sim" && p4 != "nao") {
    console.log("Desculpe, sua resposta não faz sentido!");
    console.log('Responda apenas com "sim" ou "não".');
    console.log("Você conhecia a vítima?");
    p4 = prompt("").toLowerCase();
    console.log();
  }

  console.log("Você é o assassino(a)?");
  let p5 = prompt("").toLowerCase();
  console.log();

  while (p5 != "sim" && p5 != "nao") {
    console.log("Desculpe, sua resposta não faz sentido!");
    console.log('Responda apenas com "sim" ou "não".');
    console.log("Você é o assassino(a)?");
    p5 = prompt("").toLowerCase();
    console.log();
  }

  console.log(
    `De acordo com as investigações, ${nomejogador} foi declarado(a):`
  );
  console.log();

  const perguntas = [p1, p2, p3, p4, p5];
  let qnt = 0;

  for (let i = 0; i < perguntas.length; i++) {
    if (perguntas[i] === "sim") qnt++; // contando a quantidade de "sim"
  }
  if (qnt >= 4) {
    console.log("CULPADO(A)!");
  } else if (qnt == 3) {
    console.log("SUSPEITO(A)!");
  } else {
    console.log("INOCENTE!");
  }
} else {
  console.log("Que pena! Retorne para que possamos jogar algum dia!.");
  console.log("Até breve!");
}
