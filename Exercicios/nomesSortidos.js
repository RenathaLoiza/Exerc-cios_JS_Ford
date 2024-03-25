// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor.
// Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa (para efetuar uma busca) e 
//depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

// let nome = [prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "),prompt("Digite um nome: ") ];

export function sortear(){
let nomes=[]
let quantidade= parseInt(prompt("Quantos nomes deseja colocar na lista"));

for (let i =0; i< quantidade; i++ ){
    let nome =prompt("Qual seu nome?");
    nomes.push(nome);
}
let nomeBusca=prompt("Qual nome deseja buscar");
let encontrado = nomes.includes(nomeBusca)


if (encontrado){
    alert(`ACHEI o nome ${nomeBusca}`);
}
else{
    alert(`Não achei o nome ${nomeBusca}`);


}
} 
