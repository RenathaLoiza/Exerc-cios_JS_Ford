// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.
//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;
let opcoesCombustiveis =prompt(`Qual combustivel você deseja abastecer 
A-álcool valor  R$ 4,90
G-gasolina valor R$ 5,30`);

let litros= parseFloat(prompt("Digite quantos litros "));
//processamento de dados
// = switch case para gasolina ou alcool
switch (opcoesCombustiveis) {
    case "A":
    if(litros <= 20){
        
        let valorLitro = litros * 4.90;
        let valorDescon3 = valorLitro * 0.03;
        let total = valorLitro - valorDescon3;
        alert(`você tera um desconto de 3% valor a pagar ${total}`);
     }
    else {
        
        let valorLitro = litros * 4.90;
        let valorDescon5 = valorLitro * 0.05;
        let total = valorLitro - valorDescon5;
        alert(`você tera um desconto de 3% valor a pagar ${total}`);

     }
     break;
    case "G":
        if(litros <= 20){
            
            let valorLitro= litros * 5.30;
            let valorDescon4 = valorLitro * 0.04;
            let total1 = valorLitro - valorDescon4;
            alert(`você tera um desconto de 3% valor a pagar ${total1}`);
             }
        else {
            
            let valorLitro = litros * 5.30;
            let valorDescon6 = valorLitro * 0.06;
            let total2 = valorLitro - valorDescon6;
             alert(`você tera um desconto de 3% valor a pagar ${total2}`);
             }
        break;
default:
        alert("Erro ao executar");
        break;
//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

            }