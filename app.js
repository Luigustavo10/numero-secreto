let listaNumerosSorteador = [];
let numeroLimite = 100
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {

    exibirTexto('h1', 'Jogo do numero secreto')
    exibirTexto('p', 'Escolha um numero entre 1 e 100' )
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto('h1', ' ACERTOUU MISERAVI !!!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto em ${tentativas} ${palavraTentativa}!!`
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTexto('p', 'O numero secreto eh menor');
        }
        else{
            exibirTexto('p', 'O numero secreto eh maior');

           
        }
        tentativas++;
        limparCampo();

    }
}

function numeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeNumerosNaLista = listaNumerosSorteador.length;

    if (quantidadeNumerosNaLista == numeroLimite){
        listaNumerosSorteador= [];
    }

    if(listaNumerosSorteador.includes(numeroSorteado)){
        return numeroAleatorio();

    }else{
        listaNumerosSorteador.push(numeroSorteado);
        console.log(listaNumerosSorteador)
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo(){

    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
