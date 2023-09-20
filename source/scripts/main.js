const form = document.querySelector('form');


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

    console.log ("Resultado IMC: "+resultadoImcConvertidoEmFloat);
    
        if (resultadoImcConvertidoEmFloat < 18.5){
            console.log ("Abaixo do Peso!");
        } else if (resultadoImcConvertidoEmFloat >= 18.6 && resultadoImcConvertidoEmFloat <= 24.9){
            console.log ("Parabéns, peso ideal!");
        } else if (resultadoImcConvertidoEmFloat >= 25.0 && resultadoImcConvertidoEmFloat <= 29.9){
            console.log ("Levemente acima do Peso!");
        } else if (resultadoImcConvertidoEmFloat >= 30.0 && resultadoImcConvertidoEmFloat <= 34.9) {
            console.log ("Obesidade Grau I");
        } else if (resultadoImcConvertidoEmFloat >= 35.0 && resultadoImcConvertidoEmFloat <= 39.9) {
            console.log ("Obesidade Grau II (Severa)");
        } else {
            console.log ("Osedidade Grau III (Mórbida)");
        }
})