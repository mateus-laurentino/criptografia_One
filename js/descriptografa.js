var botaoDescripgrafa = document.querySelector('#descriptografar');
var letraMaiuscula = 0;

botaoDescripgrafa.addEventListener('click',function(){
    var texto = document.querySelector(".caixaTexto-criptografia").value;
    texto = texto.trim();
    var novoTexto ='';
    if(texto[0] == '@' && texto.substring(texto.length-5,texto.length) == '.mla@' && texto.trim() != ''){
        texto = texto.replace('@','').replace('.mla@','');

        for(var x = 0;x<texto.length;x++){

            novoTexto =novoTexto + verificacoes(texto[x]);

        }
    }
    else if(texto.trim() != ''){
        novoTexto = 'Essa menssagem não esta criptografada!'
    }
    mostrarNaTela(novoTexto);
    console.log(novoTexto);
});


function verificacoes(letra){

    var letras = String(letra);
    letras = criptografa(letras);
    if(letraMaiuscula>0){
        letras = letras.toUpperCase();
        letraMaiuscula--;
    }

    if(letras == 'œ'){
        letras = '';
        letraMaiuscula++;
    }

    

    return letras
}

function ajustandoLetra(letraParaAjustar){
    var letra = String(letraParaAjustar);
    letra = criptografa(letra);
    if(letra[0] == 'œ') letra.toUpperCase();
    else return

    return letra;
}