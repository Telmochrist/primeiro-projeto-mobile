
function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona zero à esquerda se menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').innerText = horaFormatada;


}


// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Chamada inicial para evitar delay de 1s ao carregar
atualizarRelogio();

function atualizarData() {
    const dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();

    // Adiciona zero à esquerda se menor que 10
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById('data').innerText = dataFormatada;
}

// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(atualizarData, 1000);

// Chamada inicial para evitar delay de 1s ao carregar
atualizarData();