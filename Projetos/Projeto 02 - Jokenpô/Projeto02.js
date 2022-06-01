/*                     Jokenpô
Regras:
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.

- Para esse projeto você deve desenvolver um programa capaz de:
- Receber o elemento escolhido pelo usuário;
- Escolher um elemento aleatório para o computador;
- Comparar os dois elementos e declarar um vencedor.

Objetivos:
- Permitir que eu decida quantas rodadas faremos.
- Ler a minha escolha: pedra, papel ou tesoura. 
- Decidir de forma aleatória a decisão do computador.
- Mostrar quantas rodadas cada jogador ganhou.
- Determinar quem foi o grande campeão conforme a quantidade 
de vitórias de cada um (computador e jogador). 
- Perguntar se o Jogador quer jogar novamente, se sim, inicie 
volte a escolha de quantidade de rodadas, se não finalize o programa. */

const prompt = require('prompt-sync')();
console.clear();

console.log(`Olá, iremos iniciar uma rodada de Jokenpô. Deseja participar?
Insira "sim" ou "nao" para continuar:`);
let inicio = prompt('').toLowerCase();
console.log();

while (inicio != 'sim' && inicio != 'nao') {
    console.log(`Não identifiquei sua solicitação.
Por favor, digite sim para iniciarmos o jogo ou não para sair.`);
    inicio = prompt('').toLocaleLowerCase();
    console.log();
}

if (inicio == 'sim') {
    console.log(`Então vamos lá! Se atente para as seguintes regras:
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.`);
    console.log();

    console.log('Por favor, insira seu nickname de jogador(a):');
    let nickname = prompt('').trim();
    console.log();

    let loopexterno = 'sim'; //criando um loop externo para caso precise reiniciar no final
    while (inicio == loopexterno) {
        console.log('Digite o número de rodadas que deseja jogar:');
        let rodadas = Math.floor(+prompt(''));
        console.log();
        console.log('Agora iniciaremos a primeira rodada.');
        console.log();

        let countpc = 0;
        let countusuario = 0;

        // consideraremos 1 = Pedra, 2 = Papel, 3 = Tesoura
        for (let i = 0; i < rodadas; i++) {
            let pcrandom = Math.floor(Math.random() * 3 + 1);
            console.log(`Digite 1 para Pedra.
2 para Papel.
3 Para Tesoura.`);
            let palpiteusuario = +prompt('');
            console.log();

            // usando while para prevenir que não entrem valores invalidos
            while (
                palpiteusuario != 1 &&
                palpiteusuario != 2 &&
                palpiteusuario != 3
            ) {
                console.log(`Por favor, use os respectivos valores:
Digite 1 para Pedra.
2 para Papel.
3 Para Tesoura.`);
                palpiteusuario = +prompt('');
                console.log();
            }

            //Pedra(1) ganha da tesoura(3)
            if (pcrandom == 1 && palpiteusuario == 3) {
                countpc++;
                console.log(`${nickname} jogou Tesoura.`);
                console.log('A máquina jogou Pedra.');
                console.log('Uma vitória contabilizada para a máquina.');
                prompt('');
            }

            //Pedra(1) perde para Papel(2)
            else if (pcrandom == 1 && palpiteusuario == 2) {
                countusuario++;
                console.log(`${nickname} jogou Papel.`);
                console.log('A máquina jogou Pedra.');
                console.log(`Uma vitória contabilizada para ${nickname}.`);
                prompt('');
            }

            //Papel(2) ganha da Pedra(1)
            else if (pcrandom == 2 && palpiteusuario == 1) {
                countpc++;
                console.log(`${nickname} jogou Pedra.`);
                console.log('A máquina jogou Papel.');
                console.log(`Uma vitória contabilizada para a máquina.`);
                prompt('');
            }

            //Papel(2) perde para Tesoura(3)
            else if (pcrandom == 2 && palpiteusuario == 3) {
                countusuario++;
                console.log(`${nickname} jogou Tesoura.`);
                console.log('A máquina jogou Papel.');
                console.log(`Uma vitória contabilizada para ${nickname}.`);
                prompt('');
            }

            //Tesoura(3) perde para Pedra(1)
            else if (pcrandom == 3 && palpiteusuario == 1) {
                countusuario++;
                console.log(`${nickname} jogou Pedra.`);
                console.log('A máquina jogou Tesoura.');
                console.log(`Uma vitória contabilizada para ${nickname}.`);
                prompt('');
            }

            //Tesoura(3) ganha do Papel(2)
            else if (pcrandom == 3 && palpiteusuario == 2) {
                countpc++;
                console.log(`${nickname} jogou Papel.`);
                console.log('A máquina jogou Tesoura.');
                console.log(`Uma vitória contabilizada para a máquina.`);
                prompt('');

                //Para o caso de empate
            } else {
                //Empate em Pedra(1)
                if (pcrandom == 1 && palpiteusuario == 1) {
                    console.log(`${nickname} jogou Pedra.`);
                    console.log('A máquina jogou Pedra.');
                    console.log(`Empate! Esta rodada não será contabilizada.`);
                    prompt('');
                }

                //Empate Papel(2)
                else if (pcrandom == 2 && palpiteusuario == 2) {
                    console.log(`${nickname} jogou Papel.`);
                    console.log('A máquina jogou Papel.');
                    console.log(`Empate! Esta rodada não será contabilizada.`);
                    prompt('');
                }

                //Empate Tesoura(2)
                else {
                    console.log(`${nickname} jogou Tesoura.`);
                    console.log('A máquina jogou Tesoura.');
                    console.log(`Empate! Esta rodada não será contabilizada.`);
                    prompt('');
                }
            }
        }

        console.log('Fim de jogo! Agora vamos ao placar:');
        console.log();
        console.log(`Máquina: ${countpc}.
${nickname}: ${countusuario}.`);

        // Determinando o grande campeão
        if (countpc > countusuario) {
            console.log('A máquina foi a grande vencedora!');
        } else if (countpc < countusuario) {
            console.log(
                `O(A) jogador(a) ${nickname} foi o grande vencedor(a).`,
            );
        } else {
            console.log('Empate técnico!');
        }

        console.log();
        console.log('Deseja jogar novamente? Digite Sim ou Nao.');
        let continuar = prompt('').toLowerCase().trim();
        console.log();

        // corrigindo erros de entrada
        while (continuar != 'sim' && continuar != 'nao') {
            console.log(`Não identifiquei sua solicitação.
Por favor, digite sim para iniciarmos um novo jogo ou não para sair.`);
            continuar = prompt('').toLowerCase().trim();
        }

        if (continuar == 'sim') {
            continue;
        } else {
            console.log('Até logo! Te esperamos para jogar novamente.');
            break;
        }
    }
} else {
    console.log('Ok, te esperamos para jogar uma outra hora!.');
}
