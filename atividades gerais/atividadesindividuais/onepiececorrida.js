const readlineSync = require('readline-sync');
bandosdacorrida = []

function Bandos() {
    const capitao = readlineSync.question("O nome do capitão do bando pirata: ")
    const tripulacao = readlineSync.question("O nome do membro da triplação: ")
    const numeracao = readlineSync.question("A posição do bando na corrida: ")

    bando = {
    capitao: capitao,
    tripulacao: tripulacao,
    posicao: numeracao
    }
    bandosdacorrida.push(bando)
}

function Iniciar() {
    console.log("OLÁ BEM VINDO A CORRIDA DOS PIRATAS ATRÁS DO =|ONE PIECE|=")
    
}