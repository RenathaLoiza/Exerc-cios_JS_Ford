// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo
export function CalcTriangulo(){

let lado1=prompt("Digite o primeiro lado do triangulo");
let lado2=prompt("Digite o segundo lado do triangulo");
let lado3=prompt("Digite o segundo lado do triangulo");
//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
 alert("o triangulo é Equilátero ")
}

else if (lado1 == lado2 && lado1 != lado3  && lado2 !=lado3  || lado1 == lado3 && lado1 != lado2 && lado3 !=lado2 || lado2 == lado3 && lado2 != lado1 && lado3 != lado1){
    alert("O triangulo é Isóscele")
}

else if(lado1 != lado2 != lado3){
    alert("O triangulo Escaleno");
}
else{
    alert("digite algum valor");
}
}
//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console