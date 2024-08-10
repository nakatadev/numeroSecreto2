const elementoChute = document.getElementById('chute');

// Garante a compatibilidade entre diferentes navegadores
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Cria um objeto de reconhecimento de voz
const recognition = new SpeechRecognition();

// define o idioma para o reconhecimento de voz
recognition.lang = 'pt-Br';

// inicia o processo de reconhecimento de voz
recognition.start();

// adiciona um listener para o evento result
recognition.addEventListener('result', onSpeak)


function onSpeak(e) {
    // imprime no console o texto reconhecido
    // console.log(e.results[0][0].transcript)
    
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaValorValido(chute)
}

// função exibe o reconhecimento de voz na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}