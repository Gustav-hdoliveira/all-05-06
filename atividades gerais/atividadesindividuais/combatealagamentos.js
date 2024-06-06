const readlineSync = require('readline-sync');
console.log("Para o sistema de retenção contra inundações, os dados podem ser inceridos de mais de uma forma, podendo ser por:")
console.log("Ligação com atendimento automatico, ou pela internet no site municipal, caso aja internet disponivel.")

const meioderelato = readlineSync.question("você deseja relatar a través de qual meio? ligação, ou site")

function ligacaoderelato() {
    const local = readlineSync.question("O endereço: ")
}

function exibirmenudositemunicipal() {
    console.log("==============SISTEMA DE COMBATE A ALAGAMENTOS==============")
    console.log("1. CADASTRAR INCIDENTE.")
    console.log("2. SAIR")
}
rodaralternativas();


function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            OP1()
            break;
        case '2':
            OP2()
            break;
        case '3':
            OP3()
            break;
        case '4':
            OP4()
            break;
        case '5':
            console.log("Encerrando o programa...");
            return true;
    
        default:
            console.log("opção selecionada incorretamente")
            break;
    }
    return false;
}
function rodaralternativas() {
    let encerrar = false;
    switch (meioderelato) {
        case "site":
            while (!encerrar) {
                exibirmenudositemunicipal();                
                const opcao = readlineSync.question("Digite o número da opção desejada: ");
                encerrar = processarEscolha(opcao);
            }
            break;
        case "ligacao":
            while (!encerrar) {
                ligacaoderelato();
                console.log("olá você ligou para o sistema de prevenção contra alagamentos, por favor encira os dados para que possamos agir: ")
                const opcao = readlineSync.question("Você deseja cadastrarce ou verificar a")
            }
    
        default:
            break;
    }

    
}