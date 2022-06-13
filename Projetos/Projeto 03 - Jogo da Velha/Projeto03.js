const prompt = require('prompt-sync')();
console.clear();

const linhas = 3;
const colunas = 3;
let jogarnovamente = true;
let simbolo;

let arraytable = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log('Olá, o jogo da velha está prestes a iniciar.');
console.log('Por favor, insira o nickname dos dois jogadores:');
const jogador1 = prompt('Jogador 1: ');
const jogador2 = prompt('Jogador 2: ');

// colocar a opção deles escolherem quem vai jogar com x ou com o;

console.log(
    '\nOs quadrantes do tabuleiro serão representados da seguinte forma:',
);
console.table(arraytable);
console.log('\nOnde o número corresponde ao quadrante escolhido.');

//Loop para reiniciar o jogo
LoopExterno: while (jogarnovamente) {
    jogo(arraytable, simbolo);

    // Reinicio ou fim do jogo
    console.log(`\nDeseja jogar novamente? 
Digite Sim ou Nao para confirmar sua escolha.`);
    let decisãofinal = prompt('').toLowerCase();

    // While para filtrar a resposta sim ou não
    while (decisãofinal != 'sim' && decisãofinal != 'nao') {
        console.log('Por favor, digite uma opção válida:');
        decisãofinal = prompt('').toLowerCase();
    }

    if (decisãofinal == 'sim') {
        continue LoopExterno;
    } else {
        break LoopExterno;
    }
}

console.log('\nObrigado por jogar! Até logo!');

// função para rodar o jogo
function jogo(lista, simbolo) {
    console.log('\nQuantas rodadas deseja jogar?:');
    let qntrodadas = +prompt('');
    let contadorjogador1 = 0;
    let contadorjogador2 = 0;
    let contadorwinjg1 = 0;
    let contadorwinjg2 = 0;
    console.log('\nIniciaremos a rodada. Bom jogo!');
    prompt('');
    console.clear();

    //for que define a quantidade de rodadas
    for (i = 0; i < qntrodadas; i++) {
        lista = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];

        contadorjogador1 = 0;
        contadorjogador2 = 0;

        // While para o jogo rodar
        LoopInterno: while (true) {
            // Pedindo a entrada do jogador 1
            console.table(lista);
            console.log(`Jogando o round: ${jogador1}`);
            simbolo = 'X';
            let entrada;

            // Verificação para não substituir um quadrante já marcado
            verificaçãodesubstituição: while (true) {
                entrada = prompt('');

                let vericsubs = verificaçãodesubst(entrada, lista, simbolo);
                if (vericsubs == true) {
                    break verificaçãodesubstituição;
                } else {
                    console.log('Comando inválido. Jogue novamente.');
                    continue verificaçãodesubstituição;
                }
            }

            // Marcando na tabela a entrada do jogador 1
            marcarnatabela(entrada, lista, simbolo);
            let contador = verificaçãowin(lista);
            console.clear();

            // Verificando se jogador 1 é vitorioso
            if (contador > 0) {
                contadorjogador1++;
                break LoopInterno;
            }

            // Verificando empate
            let verifempate = verificaçãoempate(lista);
            if (verifempate == true) {
                console.log('Empate');
                break LoopInterno;
            }

            // Pedindo a entrada do jogador 2
            console.table(lista);
            console.log(`Jogando o round: ${jogador2}`);
            simbolo = 'O';

            // Verificação para não substituir um quadrante já marcado
            verificação: while (true) {
                entrada = prompt('');

                let vericsubs = verificaçãodesubst(entrada, lista, simbolo);
                if (vericsubs == true) {
                    break verificação;
                } else {
                    console.log('Comando inválido. Jogue novamente.');
                    continue verificação;
                }
            }

            // Marcando na tabela a entrada do jogador 2
            marcarnatabela(entrada, lista, simbolo);
            contador = verificaçãowin(lista);
            console.clear();

            // Verificando se jogador 2 é vitorioso
            if (contador > 0) {
                contadorjogador2++;
                break LoopInterno;
            }

            // Verificando empate
            verifempate = verificaçãoempate(lista);
            if (verifempate == true) {
                console.log('Empate');
                break LoopInterno;
            }
        }

        // Declarando as vitorias de cada rodada
        if (contadorjogador2 > contadorjogador1) {
            console.clear();
            console.table(lista);
            console.log(`${jogador2} ganhou esta rodada.`);
            contadorwinjg2++;
        } else if (contadorjogador2 < contadorjogador1) {
            console.clear();
            console.table(lista);
            console.log(`${jogador1} ganhou esta rodada.`);
            contadorwinjg1++;
        } else {
            console.log('Rodada Empatada!');
        }

        console.log(`\nRodadas ganhas ${jogador1}: ${contadorwinjg1}`);
        console.log(`Rodadas ganhas ${jogador2}: ${contadorwinjg2}`);
        console.log();
    }

    // Declarando o placar final
    console.log(contadorwinjg1);
    console.log(contadorwinjg2);
    if (contadorwinjg1 > contadorwinjg2) {
        console.log(`${jogador1} é o(a) grande vencedor(a)!`);
    } else if (contadorwinjg2 > contadorwinjg1) {
        console.log(`${jogador2} é o(a) grande vencendor(a)!`);
    } else {
        console.log('Empate !!');
    }
}

//Função para marcar os valores na tabela
function marcarnatabela(entrada, lista, simbolo) {
    switch (true) {
        case entrada == 1:
            lista[0].splice(0, 1, simbolo);
            break;
        case entrada == 2:
            lista[0].splice(1, 1, simbolo);
            break;
        case entrada == 3:
            lista[0].splice(2, 1, simbolo);
            break;
        case entrada == 4:
            lista[1].splice(0, 1, simbolo);
            break;
        case entrada == 5:
            lista[1].splice(1, 1, simbolo);
            break;
        case entrada == 6:
            lista[1].splice(2, 1, simbolo);
            break;
        case entrada == 7:
            lista[2].splice(0, 1, simbolo);
            break;
        case entrada == 8:
            lista[2].splice(1, 1, simbolo);
            break;
        case entrada == 9:
            lista[2].splice(2, 1, simbolo);
            break;
    }
}

//Função de verificação de vitória
function verificaçãowin(lista) {
    let contador = 0;
    if (lista[0][0] == lista[0][1] && lista[0][1] == lista[0][2]) {
        contador++;
    } else if (lista[1][0] == lista[1][1] && lista[1][1] == lista[1][2]) {
        contador++;
    } else if (lista[2][0] == lista[2][1] && lista[2][1] == lista[2][2]) {
        contador++;
    } else if (lista[0][0] == lista[1][1] && lista[1][1] == lista[2][2]) {
        contador++;
    } else if (lista[0][2] == lista[1][1] && lista[1][1] == lista[2][0]) {
        contador++;
    } else if (lista[0][0] == lista[1][0] && lista[1][0] == lista[2][0]) {
        contador++;
    } else if (lista[0][1] == lista[1][1] && lista[1][1] == lista[2][1]) {
        contador++;
    } else if (lista[0][2] == lista[1][2] && lista[1][2] == lista[2][2]) {
        contador++;
    }
    return contador;
}

//Função de verificação para não substituir um quadrante já marcado
function verificaçãodesubst(entrada, lista) {
    switch (true) {
        case entrada == 1 && lista[0][0] == 1:
            return true;

        case entrada == 2 && lista[0][1] == 2:
            return true;

        case entrada == 3 && lista[0][2] == 3:
            return true;

        case entrada == 4 && lista[1][0] == 4:
            return true;

        case entrada == 5 && lista[1][1] == 5:
            return true;

        case entrada == 6 && lista[1][2] == 6:
            return true;

        case entrada == 7 && lista[2][0] == 7:
            return true;

        case entrada == 8 && lista[2][1] == 8:
            return true;

        case entrada == 9 && lista[2][2] == 9:
            return true;
    }
}

//Função de verificação de empate
function verificaçãoempate(lista) {
    if (
        lista[0][0] != 1 &&
        lista[0][1] != 2 &&
        lista[0][2] != 3 &&
        lista[1][0] != 4 &&
        lista[1][1] != 5 &&
        lista[1][2] != 6 &&
        lista[2][0] != 7 &&
        lista[2][1] != 8 &&
        lista[2][1] != 9
    ) {
        return true;
    } else {
        return false;
    }
}
