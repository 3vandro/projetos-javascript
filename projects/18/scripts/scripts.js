const palavraInput = document.querySelector("#palavra");
const verificarBtn = document.querySelector("#botao-verificar");
const resultado = document.querySelector("#resultado");



function verificarPalavra() {

    const palavra = palavraInput.value
    const palavraInvertida = palavra.split("").reverse().join("");


    if(palavra.toLowerCase() === palavraInvertida.toLowerCase()){
        resultado.textContent = `A palavra ${palavra} é um palímdromo`
    } else {
        resultado.textContent = `A palavra "${palavra}" não é um palímdromo`
    }


    console.log(palavra, palavraInvertida)

};


verificarBtn.addEventListener("click", verificarPalavra)