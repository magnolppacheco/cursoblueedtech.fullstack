/*
Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas,
vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e 
devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por 
exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", 
"Você conseguiu consertar os reatores nucleares do motor de dobra?", 
"Você se lembrou de passar no mercado e comprar óleo?"
No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o 
resultado de acordo com esse número:
0 respostas Sim: Você falha miseravelmente.
1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima. */

const prompt = require("prompt-sync")();
console.clear();
console.log('Olá, aventureiro.');
console.log('Como devo chama-lo(a)?');
const nomeheroi = prompt('');
console.log(`Olá, ${nomeheroi}. Sua jornada em busca da espada Tibianus está prestes a começar.`);
console.log('Durante sua aventura, você irá tomar decisões que lhe ajudarão a chegar ao seu objetivo.')
console.log('Responda às perguntas com "sim" ou "não".');
console.log('');
console.log('Deseja iniciar sua jornada?');
let iniciojornada = prompt('').toLowerCase();
console.log('');

while(iniciojornada != 'sim' && iniciojornada != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('Deseja iniciar sua jornada?');
iniciojornada = prompt('').toLowerCase();}

if(iniciojornada === 'sim'){
console.log('A lenda nos conta que a espada Tibianus, uma espada que possui um grande poder,');
console.log('está localizada dentro das muralhas do castelo de Gorgon e está sendo vigiada por'); 
console.log('uma criatura abominável! Apenas um cavaleiro(a) de coração puro conseguirá resgatar a espada.');
prompt('');
console.log('O dia ainda não raiou mas sua aventura já te aguarda.');
console.log('Acredito que você já esteja preparado para partirmos!');
console.log('Já checou se está munido de tudo que precisará?')
let p1 = prompt('').toLowerCase();
console.log('');

while(p1 != 'sim' && p1 != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('Já checou se está munido de tudo que precisará?');
p1 = prompt('').toLowerCase();
}

console.log('');
console.log('Ok! Temos que partir agora mesmo, antes que seja tarde demais!');
prompt('');
console.log();
console.log('Olhe adiante, um aventureiro está indo em sua direção.');
console.log('Deseja juntar-se a ele durante a jornada?');
let p2 = prompt('').toLowerCase();
console.log();

while(p2 != 'sim' && p2 != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('Deseja juntar-se a ele durante a jornada?');
p2 = prompt('').toLowerCase();}

console.log();
console.log('OK. No momento, nossa prioridade é nos localizarmos.')
console.log();
prompt();
console.log('Aquela estrada parece suspeita...');
prompt();
console.log('Acredito que seja o caminho para o castelo de Gorgon.');
console.log('Deseja seguir pela estrada?');
let p3 = prompt('').toLowerCase();
console.log();

while(p3 != 'sim' && p3 != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('Deseja seguir pela estrada?');
p3 = prompt('').toLowerCase();}

console.log();
console.log('Entendido. Devemos seguir com cautela pois estamos em uma área desconhecida.');
prompt('');
console.log('Meu Deus! Que barulho estranho é esse? Atenção e continue na surdina.');
prompt('');
console.log();
console.log('CUIDADO!');
console.log(`${nomeheroi}, olhe para cima!`);
console.log('Um dragão está voando em sua direção.');
console.log('Deseja atacá-lo?');
let p4 = prompt('').toLowerCase();
console.log();

while(p4 != 'sim' && p4 != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('Deseja atacá-lo?');
p4 = prompt('').toLowerCase();}

console.log();
console.log('Ótimo! Sua decisão nos forneceu a vantagem necessária')
console.log('para prosseguirmos com a missão!')
console.log();
prompt();
console.log(`${nomeheroi}, sua jornada está quase no fim.`);
console.log('Observe a passagem ao lado das muralhas do castelo, vamos entrar!');
console.log('Acredito que há algum tesouro escondido dentro das muralhas.');
prompt();
console.log('O que é isso adiante?!! Uma arca!!');
console.log(`${nomeheroi}, deseja abri-la?`);
let p5 = prompt('').toLowerCase();
console.log();

while(p5 != 'sim' && p5 != 'nao'){
console.log('Sua resposta não faz sentido!');
console.log('Apenas responda com sim ou não.');
console.log('deseja abri-la?');
p5 = prompt('').toLowerCase();}

console.log();

const perguntas = [p1,p2,p3,p4,p5];
let qnt = 0; 

for(let i = 0; i < perguntas.length; i++){
    if (perguntas[i] === 'sim') qnt++; // contando a quantidade de "sim"
};
if (qnt == 5){
    console.log(`${nomeheroi}, você triunfou de maneira inquestionável!`);
    console.log('Seus feitos serão lembrados por muitas gerações.');
}
else if (qnt == 4){
    console.log(`${nomeheroi}, depois de muito esforço você conquistou seu objetivo.`);
    console.log('Embora não de maneira perfeita.');
}
else if (qnt == 3){
    console.log(`${nomeheroi}, você chegou perto de conseguir alcançar seu objetivo.`);
    console.log('Mas acabou falhando por pouco.');
}
else if (qnt == 2 || 1){
    console.log(`${nomeheroi}, em virtude de algumas decisões, você falhou.`);
    console.log('Mas ainda conseguiu fugir da situação');
}
else {
    console.log(`${nomeheroi}, suas escolhas te levaram a falhar miseravelmente.`);};
} else {
    console.log(`Que pena, ${nomeheroi}! Te esperamos novamente para o inicio de uma nova jornada.`);
}