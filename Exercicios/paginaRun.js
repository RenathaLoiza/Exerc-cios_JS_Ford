import { CalcTriangulo } from "./calculoTriangulo.js"
import { Placar } from "./jogoFutebol.js"
import { sortear } from "./nomesSortidos.js"
import { Desconto } from "./descontoFuncionario.js"
import { Gasolina } from "./postoGasolina.js"
import { ProdutoDesconto } from "./produtosDesconto.js"
import {Mortalidade} from "./taxaMortalidade.js"

let entradaSaida = true;

while (entradaSaida) {
    let opcoes = parseInt(window.prompt(`Escolha uma as seguintes funções: 
    1 - Tipo de triangulo 
    2 - Desconto na Compra 
    3 - Placar do jogo 
    4 - Sortear e inserir nomes 
    5 - Saber o desconto da gasolina 
    6 - Descontos nos produtos 
    7 - Taxa de mortalidade 
    8 - Sair
    `))

    switch (opcoes) {


        case 1:

            CalcTriangulo()

            break

        case 2:

            Desconto()

            break

        case 3:

            Placar()

            break

        case 4:

            sortear()

            break

        case 5:

            Gasolina()

            break


        case 6:
            ProdutoDesconto()

            break

        case 7:
            Mortalidade()

            break

        case 8:

        entradaSaida = false

            break

        default:

            alert("Falha")

            break;
    }
}