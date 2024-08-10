function verificaValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
    }

    if (numeroForMaiorOuMenor(numero)) {
        console.log(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}