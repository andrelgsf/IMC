

    function calcularIMC(peso, altura) {
        return peso / (altura*altura);
    }

    {
        for (var i = 0; i < 10; i++) {
        var peso = parseFloat(prompt("Digite seu peso em kg:"));
        var altura = parseFloat(prompt("Digite sua altura em metros(usando ponto,ex:1.74):"));
        var media = peso / (altura*altura);

        if (media < 18.5) {
            alert("Abaixo do peso normal");
        } else if (media >= 18.5 && media <= 24.9) {
            alert("Peso normal");
        } else if (media >= 25 && media <= 29.9) {
            alert("Excesso de peso");
        } else if (media >= 30 && media <= 34.9) {
            alert("Obesidade classe 1");
        } else if (media >= 35 && media <= 39.9) {
            alert("Obesidade classe 2");
        } else {
            alert("Obesidade classe 3");
        }
    }
}

