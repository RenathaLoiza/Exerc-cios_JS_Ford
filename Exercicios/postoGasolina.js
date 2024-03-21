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
G-gasolina valor R$ 5,30`).toUpperCase();

let litros= parseFloat(prompt("Digite quantos litros "));
//processamento de dados
// = switch case para gasolina ou alcool
switch (opcoesCombustiveis){
    case "A":
        if( litros <= 20 ){
            let valorLitro = litros * 4.90;
            let valorDescon3 = valorLitro * 0.03;
            
            alert(`você tera um desconto de 3% valor a pagar ${ valorLitro - valorDescon3}`);
        }
        else if( litros > 20 ){
            let valorLitro = litros * 4.90;
            let valorDescon5 = valorLitro * 0.05;
            
            alert(`você tera um desconto de 3% valor a pagar ${valorLitro - valorDescon5}`);

        }
        else{
            alert("VOCÊ DIGITOU ALGO ERRADO");
        }

        break;
    case "G":
        if( litros <= 20 ){
            let valorLitro= litros * 5.30;
            let valorDescon4 = valorLitro * 0.04;
            
            alert(`você tera um desconto de 3% valor a pagar ${valorLitro - valorDescon4}`);
        }
        else if ( litros > 20 ){
            let valorLitro = litros * 5.30;
            let valorDescon6 = valorLitro * 0.06;
            
            alert(`você tera um desconto de 3% valor a pagar ${valorLitro - valorDescon6}`);
        }
        else{
            alert("VOCÊ DIGITOU ALGO ERRADO");
        }
        break;

    default:
        alert("Digite uma opção")
        break;
}
//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

