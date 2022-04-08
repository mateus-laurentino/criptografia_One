var botaoCriptografa = document.querySelector('#criptografar');
var letraMaiuscula = 0;

botaoCriptografa.addEventListener('click',function(){
    var texto = document.querySelector(".caixaTexto-criptografia").value;
    var novoTexto ='';

    if(texto[0] != '@' && texto.substring(texto.length-5,texto.length) != '.mla@' && texto.trim() != ''){
        texto = texto.replace('@','').replace('.mla@','');
        novoTexto = '@'
        for(var x = 0;x<=texto.length;x++){
            if(x < texto.length){
                novoTexto =novoTexto + criptografa(texto[x]);
            }else if(x== texto.length){
                novoTexto += '.mla@';
            }
            
        }
    }else if(texto[0] == '@' && texto.substring(texto.length-5,texto.length) == '.mla@' && texto.trim() != ''){
        novoTexto = 'Essa menssagem ja foi criptografada!'
    }
    mostrarNaTela(novoTexto);
});


function criptografa(letraSelecionada){
    var letra = String(letraSelecionada);


    if(letra == 'a') letra = 'n';
    else if(letra == 'b') letra = 'o';
    else if(letra == 'c') letra = 'p';
    else if(letra == 'd') letra = 'q';
    else if(letra == 'e') letra = 'r';
    else if(letra == 'f') letra = 's';
    else if(letra == 'g') letra = 't';
    else if(letra == 'h') letra = 'u';
    else if(letra == 'i') letra = 'v';
    else if(letra == 'j') letra = 'w';
    else if(letra == 'k') letra = 'x';
    else if(letra == 'l') letra = 'y';
    else if(letra == 'm') letra = 'z';
    else if(letra == '.') letra = ' ';
    else if(letra == 'ñ') letra = '\n'
    else if(letra == 'n') letra = 'a';
    else if(letra == 'o') letra = 'b';
    else if(letra == 'p') letra = 'c';
    else if(letra == 'q') letra = 'd';
    else if(letra == 'r') letra = 'e';
    else if(letra == 's') letra = 'f';
    else if(letra == 't') letra = 'g';
    else if(letra == 'u') letra = 'h';
    else if(letra == 'v') letra = 'i';
    else if(letra == 'w') letra = 'j';
    else if(letra == 'x') letra = 'k';
    else if(letra == 'y') letra = 'l';
    else if(letra == 'z') letra = 'm';
    else if(letra == ' ') letra = '.';
    else if(letra == '\n') letra = 'ñ'


    if(letra == 'A') letra = 'œn';
    else if(letra == 'B') letra = 'œo';
    else if(letra == 'C') letra = 'œp';
    else if(letra == 'D') letra = 'œq';
    else if(letra == 'E') letra = 'œr';
    else if(letra == 'F') letra = 'œs';
    else if(letra == 'G') letra = 'œt';
    else if(letra == 'H') letra = 'œu';
    else if(letra == 'I') letra = 'œv';
    else if(letra == 'J') letra = 'œw';
    else if(letra == 'K') letra = 'œx';
    else if(letra == 'L') letra = 'œy';
    else if(letra == 'M') letra = 'œz';
    else if(letra == 'N') letra = 'œa';
    else if(letra == 'O') letra = 'œb';
    else if(letra == 'P') letra = 'œc';
    else if(letra == 'Q') letra = 'œd';
    else if(letra == 'R') letra = 'œe';
    else if(letra == 'S') letra = 'œf';
    else if(letra == 'T') letra = 'œg';
    else if(letra == 'U') letra = 'œh';
    else if(letra == 'V') letra = 'œi';
    else if(letra == 'W') letra = 'œj';
    else if(letra == 'X') letra = 'œk';
    else if(letra == 'Y') letra = 'œl';
    else if(letra == 'Z') letra = 'œm';
    
    return letra;
}

function mostrarNaTela(texto){
    var respostaImg = document.querySelector('.container-descriptografia-img');
    var respostaLbl = document.querySelector('.container-descriptografia-lbl');
    if(texto.length > 0 && texto != '@.mla@'){
        respostaImg.classList.add('esconder');
        respostaLbl.classList.remove('esconder');
        respostaLbl.textContent = texto;
    }else{
        respostaImg.classList.remove('esconder');
        respostaLbl.classList.add('esconder');
    }
}
