function removerAcentos(novaStringComAcento) { //função que remove os acentos do atributo
    var string = novaStringComAcento;
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,
        n: /\xF1/g
    }
    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
    }

    return string;
};

const tratamentoDados = str => removerAcentos(str).toUpperCase(); //aplica o remover acentos e coloca todas as letras em maiúsculo

const encontrarEstado = (input) => listaEstado.find(elem => tratamentoDados(elem.nome) == tratamentoDados(input)); //aplica o tratamento de dados no input do usuário e compara para encontrar o estado

function inserirBandeira(bandeira) { //função para inserir a bandeira no background
    document.getElementById("pagina").style.backgroundImage = 'url(' + bandeira + ')';
}

function retirarBandeira() { //função para remover a bandeira do background
    document.getElementById("pagina").style.backgroundImage = null;
}

function buscaCliqueBotao() { //buscar o dado no input e envia a resposta
    let inputUsuario = document.getElementById('estado_usuario').value,
        divResposta = document.getElementById('resposta'),
        resultado = encontrarEstado(inputUsuario)

    if (!!resultado) {
        divResposta.innerHTML = respostaSucesso(resultado)
        inserirBandeira(resultado.bandeira)
    } else {
        divResposta.innerHTML = respostaErro(inputUsuario)
        retirarBandeira()
    }
}  