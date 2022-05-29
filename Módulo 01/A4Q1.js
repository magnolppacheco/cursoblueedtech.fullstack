/*As empresas @.com resolveram dar um aumento de salário aos seus colaboradores 
e lhe contrataram para desenvolver o programa que calculará os reajustes. 
Faça um programa que recebe o salário de um colaborador e o reajuste segundo 
o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento. */

const prompt = require('prompt-sync')();
console.clear();

console.log('Insira o valor do salário do colaborador:');
const salario = +prompt('');
console.log();

if (salario >= 1500) {
    let nvsalario = Math.floor(salario + salario * (5 / 100)); //salario final
    let valoraumento = Math.floor(salario * (5 / 100)); // Valor do aumento no salário
    console.log('Salário antes do reajuste: ', salario);
    console.log('Percentual de aumento aplicado: 5%');
    console.log('Valor do aumento: ', valoraumento);
    console.log('Novo salário: ', nvsalario);
} else if (salario < 1500 && salario >= 700) {
    let nvsalario = Math.floor(salario + salario * (10 / 100)); // (Aplicando Math.floor para evitar 
    let valoraumento = Math.floor(salario * (10 / 100)); // dízimas como resultado das divisões).
    console.log('Salário antes do reajuste: ', salario);
    console.log('Percentual de aumento aplicado: 10%');
    console.log('Valor do aumento: ', valoraumento);
    console.log('Novo salário: ', nvsalario);
} else if (salario < 700 && salario >= 280) {
    let nvsalario = Math.floor(salario + salario * (15 / 100));
    let valoraumento = Math.floor(salario * (15 / 100));
    console.log('Salário antes do reajuste: ', salario);
    console.log('Percentual de aumento aplicado: 15%');
    console.log('O valor do aumento: ', valoraumento);
    console.log('Novo salário: ', nvsalario);
} else {
    let nvsalario = Math.floor(salario + salario * (20 / 100));
    let valoraumento = Math.floor((salario * (20 / 100)));
    console.log('Salário antes do reajuste: ', salario);
    console.log('Percentual de aumento aplicado: 20%');
    console.log('Valor do aumento: ', valoraumento);
    console.log('Novo salário: ', nvsalario);
};