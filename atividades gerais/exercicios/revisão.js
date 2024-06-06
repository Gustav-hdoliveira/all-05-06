//variaveis
function idades(anodenascimento) {
    const anoatual = 2024
    const resualtado = anodenascimento - anoatual
    console.log(resualtado * -1)
}
//idades(2006)

function numerosevalores() {
    const numero1 = 2
    const numero2 = 3
    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2
    const resto = numero1 % numero2
}

function comparadores() {
    const numero1 = 30
    const numero2 = 94
    console.log(numero1 === numero2)
    console.log(numero1 !== numero2)
    console.log(numero1 > numero2)
    console.log(numero1 >= numero2)
    console.log(numero1 < numero2)
    console.log(numero1 <= numero2)
}


function operadoreslogicos() {
    const temidadeparadirigir = true
    const temcarteirademotorista = true
    const temcarroproprio = false
    if (temidadeparadirigir === temcarteirademotorista){
        console.log("Você pode dirigir legalmente")
    } else if (temcarroproprio === temcarteirademotorista) {
        console.log("Você pode dirigir, mas seja cuidadoso")
    } else {
        console.log("Você não pode dirigir")
    }
}

function arrays() {
    const nomes = ["EduardO FiguEiro  ", "   ROBErto adRANo", "LucAS nuNes     "]
    console.log(nomes.toLowerCase())
    console.log(nomes.toUpperCase())
    console.log(nomes.trim())
    console.log(nomes.includes())
    console.log(nomes.includes())
    console.log(nomes.includes())
    console.log(nomes.replaceall("a", "#"))
}

function string() {
    const nome = "Eduardo"
    const idade = 20
    const cidade = "Chique-Chique"
    const frasepersonaconcatenada = `Olá meu nome é ${nome} eu tenho ${idade} anos e nasci e cresci em ${cidade}`
    console.log(frasepersona)

}

function funcoes() {
    function areaquadrado() {
        const altura = 5
        const largura = 5
        const area = altura * largura
        console.log(area)
    }
    function arearetangulo() {
        const altura = 10
        const largura = 22
        const area = altura * largura
        consolee.log(area)
    }
    function areatriangulo() {
        const base = 8
        const altura = 8
        const area = (base * altura) / 2
    }
    areaquadrado()
    arearetangulo()
    areatriangulo()
}

function objeto() {
    const nomealuno = "Miguel del Sonic"
    const idade = 15
    const curso = "solda"
    const registrodoaluno = {
        nome: nomealuno,
        idade: idade,
        curso: curso,
    }
    const registronovo = {
        ...registrodoaluno,
        notas: []
    }
    registronovo.notas.push(20, 80, 70)
    const soma = registronovo.notas[0] + registronovo.notas[1] + registronovo.notas[2]
    const tamanho = registronovo.notas.length
    const media = soma / tamanho
    console.log(registronovo)
    console.log("á media é: ", media)
    const alunodados = {
        ... registronovo,
        pais: "Casaquistão",
        anoescola: "2 ensino medio",
        cidade: "Cityofwar"
    }
    console.log(alunodados)
}

function condicoes() {
    const genero = "ficção"
    if (genero === "ação") {
        console.log("Você gosta de filmes de ação! perseguições e explosoes incriveis")
    } else if (genero === "ficção") {
        console.log("Você gosta de filmes de ficção! O amor por outros mundos e realidades")
    } else if (genero === "comedia") {
        console.log("Você gosta de filmes de comédia! Gargalhadas de ficar sem folego")
    } else if (genero === "terror") {
        console.log("Você gosta de filmes de terror! Prepare-se para muitos sustos.")
    } else if (genero === "aventura") {
        "Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes."
    } else {
        console.log("Não sei qual é o seu gênero de filme favorito.")
    }
}

function wiile() {
    let valorinicial = 10
    while (valorinicial>=0) {
        console.log(valorinicial)
        valorinicial--
    }
}

function loopfor() {
    for (let numero = 1; numero <= 10; numero++) {
        console.log(`7 x ${numero} = `, 7 * numero)
    }
}

const readlineSync = require('readline-sync');
function variaveis() {
    const numero = readlineSync.question("insira um numero por favor: ")
    console.log("O numero incerido foi:", numero)
}

function operadoresaritmeticos() {
    const numero = readlineSync.question("insira um numero por favor: ")
    const numero2 = readlineSync.question("insira outro numero por favor: ")
    console.log(`${numero} + ${numero2} =`, numero + numero2)
    console.log(`${numero} - ${numero2} =`, numero - numero2)
    console.log(`${numero} * ${numero2} =`, numero * numero2)
    console.log(`${numero} / ${numero2} =`, numero / numero2, `e o resto é ${numero % numero2}`)
}

function comparacaototal() {
    const numer = readlineSync.question("insira um numero por favor: ")
    const numero = readlineSync.question("insira outro numero por favor: ")
    console.log(numer === numero)
    console.log(numer !== numero)
    console.log(numer >= numero)
    console.log(numer < numero)
    console.log(numer <= numero)    
}

function operadoreslogicos2() {
    const numer = readlineSync.question("insira um true ou false por favor: ")
    const numero = readlineSync.question("insira outro true ou false por favor: ")
    console.log(numer === numero)
    console.log(numer !== numero)
    console.log(numer >= numero)
    console.log(numer < numero)
    console.log(numer <= numero) 
}

function arrays2() {
    const nota1 = readlineSync.question("insira um numero por favor: ")
    const nota2 = readlineSync.question("insira outro numero por favor: ")
    const nota3 = readlineSync.question("insira outro numero por favor: ")
    const nota4 = readlineSync.question("insira outro numero por favor: ")
    const nota5 = readlineSync.question("insira outro numero por favor: ")
    let arraynotas = []
    arraynotas.push(Number(nota1), Number(nota2), Number(nota3), Number(nota4), Number(nota5))
    const soma = arraynotas[0] + arraynotas[1] + arraynotas[2] + arraynotas[3] + arraynotas[4]
    const media = soma / 5
    console.log("a media foi: ",media)
}

function strings() {
    const nome = readlineSync.question("insira um nome por favor: ")
    console.log(nome.toUpperCase)
    console.log(nome.toLowerCase)
    console.log(nome.length)
}

function funcoes2() {
    function funcaointerna() {
    const numer = readlineSync.question("insira um true ou false por favor: ")
    const numero = readlineSync.question("insira outro true ou false por favor: ")
    console.log(Number(numer) + Number(numero))
    }
    funcaointerna()
}

function condicionais() {
    const idade = readlineSync.question("insira sua idade por favor: ")
    if (Number(idade) >= 18) {
        console.log("Você tem a idade minima para dirigir!")
    } else {
        console.log("Infilizmente você não tem idade para dirigir")
    }
}

function wile() {
    const numero = readlineSync.question("por favor insira um numero de valor positivo: ")
    let contagem = 0
    while (contagem <= Number(numero)) {
        console.log(contagem)
        contagem++
    }
}

function loopforsemimpar() {
    const numeropositivo = readlineSync.question("por favor insira um numero de valor positivo: ")
    for (let constagempar = 2; constagempar <= Number(numeropositivo); constagempar++) {
        if (constagempar % 2 === 0) {
            console.log(constagempar)
        }        
    }
}