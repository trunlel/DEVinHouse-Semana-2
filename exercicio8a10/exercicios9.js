var final = document.getElementById('final');
function incrementar() {
    var valor = final.textContent;
    final.innerText = parseInt(valor) + 1;
}
function decrementar() {
    var valor = final.textContent;
    final.innerText = parseInt(valor) - 1;
}