var botaoCopiar = document.querySelector('.botao-copiar');

botaoCopiar.addEventListener('click',function(){
    var textArea = document.querySelector('.container-descriptografia-lbl').value;
    navigator.clipboard.writeText(textArea)
});