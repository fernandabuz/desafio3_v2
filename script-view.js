let respostaSucesso = estado => { //resposta que aparecerá para o usuário se ele inserir um estado válido

    return `
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <p class="label_estado">Sigla</p>
                <h5 class="resultado_estado">${estado.sigla}</h5>
            </div>
            <div class="col-auto">
                <p class="label_estado">Nome</p>
                <h5 class="resultado_estado">${estado.nome}</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-auto">
                <p class="label_estado">Capital</p>
                <h5 class="resultado_estado">${estado.capital}</h5>
            </div>
            <div class="col-auto">
                <p class="label_estado">Região</p>
                <h5 class="resultado_estado">${estado.regiao}</h5>
            </div>
        </div>
    </div>
    `
}

let respostaErro = palavraBuscada => { //resposta que aparecerá para o usuário em casa de busca inválida
    return `
        <p class="resultado_erro"> :( Sinto muito, não encontramos nenhum estado com o nome <span style="color:#FF6666">${palavraBuscada}</span>!</p>
    `
}