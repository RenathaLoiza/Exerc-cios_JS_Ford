// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor.
// Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa (para efetuar uma busca) e 
//depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

let nome = [prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "), prompt("Digite um nome: "),prompt("Digite um nome: ") ];

let bucarNome=("Digite o nome que deseja procurar);

  if(bucarNome === nome){
   alert(`O nome ${bucarNome} está na lista`);
  }
else {
  alert(`O nome ${bucarNome} não esta na lista`);
}
