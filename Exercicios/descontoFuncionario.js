// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um
//cliente comum (1) "sem desconto",
// funcionário (2) 10% de desconto
//vip (3) 5% de desconto





//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 
export function Desconto(){
let opcoes= parseInt(prompt(`você é cliente 
1-Cliente
2-Funcionario
3-VIP`));
let totalCompra= prompt("Valor total da compra?");
let totalDescFuncionario = totalCompra * 0.10;
let totalDescVip = totalCompra*0.05;
let totalDescFuncionario1 = totalCompra-totalDescFuncionario;
let totalDescVip1=totalCompra-totalDescVip;

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip
switch (opcoes) {
    case 1:
        alert(`você é cliente comum, e voce não possui desconto ${totalCompra} reais`);
        break;
    case 2:
        alert(`Você é um cliente funcionario é possui o valor de 10% valor a pagar ${ totalDescFuncionario1} reais`);
        break;
    case 3:
        alert(`Você é um cliente VIP e possui o valor de 5% valor a pagar ${totalDescVip1} reais`);
        break;
    default:
        alert("Digite algum valor");
        break;
}
}
//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto