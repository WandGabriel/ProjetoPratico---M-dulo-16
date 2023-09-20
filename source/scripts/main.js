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
    
    switch (resultadoImcConvertidoEmFloat) 
    {
        case resultadoImcConvertidoEmFloat > 18.5:
            console.log ("Abaixo do Peso!");
            break;
        case (resultadoImcConvertidoEmFloat >= 18.6) && (resultadoImcConvertidoEmFloat <= 24.9):
            console.log ("Parabéns, peso ideal!");
            break;
        case (resultadoImcConvertidoEmFloat >= 25.0) && (resultadoImcConvertidoEmFloat <= 29.9):
            console.log ("Levemente acima do Peso!");
            break;
        case resultadoImcConvertidoEmFloat >= 30.0 && resultadoImcConvertidoEmFloat <= 34.9:
            console.log ("Obesidade Grau I");
            break;
        case resultadoImcConvertidoEmFloat >= 35.0 && resultadoImcConvertidoEmFloat <= 39.9:
            console.log ("Obesidade Grau II (Severa)");
            break;
        default:
            console.log ("Osedidade Grau III (Mórbida)");
    }
})