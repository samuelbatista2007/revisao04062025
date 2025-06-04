function somar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    resultado = valor1 + valor2;
    document.getElementById('resultado').innerHTML = `A soma de ${valor1} e ${valor2} é ${resultado}`;
}
function subtrair(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    resultado = valor1 - valor2;
    document.getElementById('resultado').innerHTML = `A subtração de ${valor1} e ${valor2} é ${resultado}`;
}
function multiplicar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    resultado = valor1 * valor2;
    document.getElementById('resultado').innerHTML = `A multiplicacão de ${valor1} e ${valor2} é ${resultado}`;
}
function dividir(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    resultado = valor1 / valor2;
    document.getElementById('resultado').innerHTML = `A divisão de ${valor1} e ${valor2} é ${resultado}`;

}