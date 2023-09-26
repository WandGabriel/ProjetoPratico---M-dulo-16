function calculeImc(peso, altura) {
    peso = parseFloat (peso);
    altura = parseFloat (altura);

    let calculo = peso / (altura * altura);
    return calculo.toFixed(2);

}

module.exports = calculeImc;