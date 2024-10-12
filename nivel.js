// Importa o módulo readline para permitir a entrada de dados do usuário
const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o herói
function classificarHeroi(nomeHeroi, xp) {
    let nivel;

    // Estrutura de decisão para classificar o nível do herói
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem final com o nível do herói
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
}

// Captura o nome do herói
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    // Captura a quantidade de XP do herói
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xp) => {
        // Converte a entrada de XP para número inteiro
        xp = parseInt(xp);

        // Chama a função para classificar o herói
        classificarHeroi(nomeHeroi, xp);

        // Fecha a interface de leitura
        rl.close();
    });
});
