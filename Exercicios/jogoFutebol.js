// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo
let time1= prompt("Digite o nome do primeiro time");
let time1gol=parseInt(prompt("digite a quantidade de gols do primeiro time"));
let time2= prompt("Digite o nome do segundo time");
let time2gol=parseInt(prompt("digite a quantidade de gols do segundo time"));


if(time1gol > time2gol){
alert(`O time ${time1}com ${time1gol} e uma diferença de ${time1gol-time2gol} e o placar 
${time1} ${time1gol} X ${time2} ${time2gol}`);
}
else if(time1gol == time2gol){
    alert(`Os times estão empatados e o placar ${time1} ${time1gol} X ${time2} ${time2gol}`);
}
else if(time1gol < time2gol){
alert(`Os time ${time2} ganhou com ${time2gol} e uma diferença de ${time2gol-time1gol} e o placar 
${time1} ${time1gol} X ${time2} ${time2gol}`);
}
else{
    alert("verifique se você digitou todas as informações");
}

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol