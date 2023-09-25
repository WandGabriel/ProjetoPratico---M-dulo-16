const form = document.querySelector('form');
let linhas = '';
const imagemTriste = '<img src="source/images/smile-sad.png" alt="Emoji triste" />';
const imagemFeliz = '<img src="source/images/smile.png" alt="Emoji feliz"/>';
const imagemEntediado = '<img src="source/images/smile-bored.png" alt="Emoji entediado" />';
const descricaoImc = document.querySelector('.descricao-imc');
const imagemResultado = document.querySelector('.img-resultado');
const categoriaResultado = document.querySelector('.classificacao-imc')

function calculeImc(peso, altura) {
    peso = parseFloat (peso);
    altura = parseFloat (altura);

    let calculo = peso / (altura * altura);

    return calculo.toFixed(2);
}

function substituirVirgulaPorPonto (valor) {
    return valor.replace(',','.');
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valorPeso = document.getElementById('id-peso');
    let valorAltura = document.getElementById('id-altura');
    valorPeso = substituirVirgulaPorPonto(valorPeso.value);
    valorAltura = substituirVirgulaPorPonto(valorAltura.value);
    const resultadoImc = calculeImc(valorPeso, valorAltura);
    const resultadoImcConvertidoEmFloat = parseFloat(resultadoImc);
    const mensagemResultadoImcPositivo = `<p> Seu IMC é de: <span class="spanSuccess">${resultadoImcConvertidoEmFloat}</span></p>`
    const mensagemResultadoImcAtencao = `<p> Seu IMC é de: <span class="spanAttention">${resultadoImcConvertidoEmFloat}</span></p>`
    const mensagemResultadoImcNegativo = `<p> Seu IMC é de: <span class="spanWarning">${resultadoImcConvertidoEmFloat}</span></p>`
    let classificacao = '';

    
        if (valorPeso == '' || valorAltura == '') {
            alert ("Valores inválido!");
        } else {
            if (resultadoImcConvertidoEmFloat <= 18.5){
                descricaoImc.innerHTML = mensagemResultadoImcAtencao;
                classificacao = `Categoria: <span class="spanAttention"> Abaixo do peso</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemEntediado;
            } else if (resultadoImcConvertidoEmFloat > 18.5 && resultadoImcConvertidoEmFloat <= 25){
                descricaoImc.innerHTML = mensagemResultadoImcPositivo;
                classificacao = `Categoria: <span class="spanSuccess"> Peso Ideal</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemFeliz;
            } else if (resultadoImcConvertidoEmFloat > 25.0 && resultadoImcConvertidoEmFloat <= 30){
                descricaoImc.innerHTML = mensagemResultadoImcNegativo;
                classificacao = `Categoria: <span class="spanWarning">Sobrepeso</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemTriste;
            } else if (resultadoImcConvertidoEmFloat > 30.0 && resultadoImcConvertidoEmFloat <= 35) {
                descricaoImc.innerHTML = mensagemResultadoImcNegativo;
                classificacao = `Categoria: <span class="spanWarning">Obesidade Grau I</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemTriste;
            } else if (resultadoImcConvertidoEmFloat > 35.0 && resultadoImcConvertidoEmFloat <= 40) {
                descricaoImc.innerHTML = mensagemResultadoImcNegativo;
                classificacao = `Categoria: <span class="spanWarning">Obesidade Grau II</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemTriste;
            } else {
                descricaoImc.innerHTML = mensagemResultadoImcNegativo;
                classificacao = `Categoria: <span class="spanWarning">Obesidade Grau III</span>`;
                categoriaResultado.innerHTML = classificacao;
                imagemResultado.innerHTML = imagemTriste;
            }
        }        
})

form.addEventListener('reset', function(e){
    descricaoImc.innerHTML = '';
    imagemResultado.innerHTML = '';
    categoriaResultado.innerHTML = '';
})