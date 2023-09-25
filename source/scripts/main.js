const form = document.querySelector('form');
let linhas = '';
const imagemTriste = '<img src="source/images/smile-sad.png" alt="Emoji triste" />';
const imagemFeliz = '<img src="source/images/smile.png" alt="Emoji feliz"/>';
const imagemEntediado = '<img src="source/images/smile-bored.png" alt="Emoji entediado" />';
const descricaoImc = document.querySelector('.description-imc');
const imagemResultado = document.querySelector('.img-resultado');

function calculeImc(peso, altura) {
    peso = parseFloat (peso);
    altura = parseFloat (altura);

    let calculo = peso / (altura * altura);

    return calculo.toFixed(2);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorPeso = document.getElementById('id-peso');
    const valorAltura = document.getElementById('id-altura');

    const resultadoImc = calculeImc(valorPeso.value, valorAltura.value);
    const resultadoImcConvertidoEmFloat = parseFloat(resultadoImc);
    const mensagemResultadoImcPositivo = `<p> Seu IMC é de: <span class="spanSuccess">${resultadoImcConvertidoEmFloat}</span></p>`
    const mensagemResultadoImcAtencao = `<p> Seu IMC é de: <span class="spanAttention">${resultadoImcConvertidoEmFloat}</span></p>`
    const mensagemResultadoImcNegativo = `<p> Seu IMC é de: <span class="spanWarning">${resultadoImcConvertidoEmFloat}</span></p>`

    
        if (resultadoImcConvertidoEmFloat < 18.5){
            descricaoImc.innerHTML = mensagemResultadoImcAtencao;
            imagemResultado.innerHTML = imagemEntediado;
        } else if (resultadoImcConvertidoEmFloat >= 18.5 && resultadoImcConvertidoEmFloat <= 24.9){
            descricaoImc.innerHTML = mensagemResultadoImcPositivo;
            imagemResultado.innerHTML = imagemFeliz;
        } else if (resultadoImcConvertidoEmFloat >= 25.0 && resultadoImcConvertidoEmFloat <= 29.9){
            descricaoImc.innerHTML = mensagemResultadoImcNegativo;
            imagemResultado.innerHTML = imagemTriste;
        } else if (resultadoImcConvertidoEmFloat >= 30.0 && resultadoImcConvertidoEmFloat <= 34.9) {
            descricaoImc.innerHTML = mensagemResultadoImcNegativo;
            imagemResultado.innerHTML = imagemTriste;
        } else if (resultadoImcConvertidoEmFloat >= 35.0 && resultadoImcConvertidoEmFloat <= 39.9) {
            descricaoImc.innerHTML = mensagemResultadoImcNegativo;
            imagemResultado.innerHTML = imagemTriste;
        } else {
            descricaoImc.innerHTML = mensagemResultadoImcNegativo;
            imagemResultado.innerHTML = imagemTriste;
        }
})