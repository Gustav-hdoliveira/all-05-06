function cliquenobotão() {
    const imagem = document.getElementById("imagem");
    if (imagem.style.display === "none") {
        imagem.style.display = "block"; //torna imagem visivel
    } else {
        imagem.style.display = "none"; //Oculta imagem se já estiver visivel
    }
}

document.getElementById("meuBotao").addEventListener("click", cliquenobotão);