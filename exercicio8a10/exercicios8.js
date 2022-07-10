function calculaAno() {


    var ano = prompt('Informe um ano');
    var anoAtual = new Date().getFullYear();
    var resultado = anoAtual - parseInt(ano);
    alert('O resultado é: ' + resultado);
    element.innerHTML = resultado;
}