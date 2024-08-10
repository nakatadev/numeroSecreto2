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

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }

    if (chute === `Game over` || chute === `gameover` || chute === `game over` || chute === `GAME OVER`) {
        document.body.innerHTML = `
            <h2 class="gameOver">GAME OVER</h2>
            <h3 class=>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        const body = document.querySelector('body');
        body.classList.add('gameOver');
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-up-long"></i></div>
        `
    }
    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})