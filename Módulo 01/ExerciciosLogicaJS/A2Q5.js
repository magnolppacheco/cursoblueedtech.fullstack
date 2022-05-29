/* Faça um programa de cadastro de clientes que mostre um menu 
de opções e permita com que a pessoa escolha umas das opções, 
exibindo qual foi a opção escolhida. */

const prompt = require('prompt-sync')();
console.clear();

console.log(
    'Olá. Com finalidade cadastral, necessitamos que forneça seu nome:',
);
let nome = String(prompt(''));
console.log('');
console.log('Agradecemos sua colaboração.');
console.log('');
console.log(`Nossas opções de serviço são: 
Festas de casamento
Festas de aniversario
Formaturas`);
console.log('');
console.log(`Escolha um de nossos serviços digitanto "C" para festas de casamento , "A" para festas de
aniversário ou "F" para festas de formatura.`);
console.log('Qual dos nossos serviços deseja contratar?');
let serviço = prompt('').toLocaleLowerCase();
console.log();

while (serviço != 'c' && serviço != 'a' && serviço != 'f') {
    console.log('Sua contratação não foi processada.');
    console.log(`Por favor, escolha um de nossos serviços digitanto "c" para festas de casamento , "a" para festas de
aniversário ou "f" para festas de formatura.`);
    serviço = prompt('').toLocaleLowerCase();
    console.log('');
}

if (serviço == 'c') {
    console.log(`Obrigado, ${nome}. Sua solicitação foi concluida com sucesso.
Nome do cliente: ${nome}.
Serviço: Festa de casamento.`);
} else if (serviço == 'a') {
    console.log(`Obrigado, ${nome}. Sua solicitação foi concluida com sucesso.
Nome do cliente: ${nome}.
Serviço: Festa de aniversário.`);
} else {
    console.log(`Obrigado, ${nome}. Sua solicitação foi concluida com sucesso.
Nome do cliente: ${nome}.
Serviço: Festa de formatura.`);
}
