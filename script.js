function calcular1(){
    var Q = parseFloat(document.getElementById('Q').value);
    var v = parseFloat(document.getElementById('v').value);
    var B = parseFloat(document.getElementById('B').value);
    var sen = parseFloat(document.getElementById('sen').value);

    var forca = (Q * v * B * sen);
    document.getElementById('resultados').innerText = forca;
}

function calcular(){
    var Q1 = parseFloat(document.getElementById('Q1').value);
    var Q2 = parseFloat(document.getElementById('Q2').value);
    var D = parseFloat(document.getElementById('D').value);

    var Força = ( 9000000000 * Q1 * Q2 / (D * D));
    document.getElementById('resultado').innerText = Força;}