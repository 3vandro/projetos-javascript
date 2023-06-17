const palavraInput = document.querySelector("#palavra");
const verificarBtn = document.querySelector("#botao-verificar");
const resultado = document.querySelector("#resultado");



function verificarPalavra() {

    const palavra = palavraInput.value
    const palavraInvertida = palavra.split("").reverse().join("");


    if(palavra.toLowerCase() === palavraInvertida.toLowerCase()){
        resultado.textContent = `A palavra ${palavra} é um palíndromo`
    } else {
        resultado.textContent = `A palavra "${palavra}" não é um palíndromo`
    }


    console.log(palavra, palavraInvertida)

};


verificarBtn.addEventListener("click", verificarPalavra);

palavraInput.addEventListener("keyup", (e) =>{

    if(e.key === "Enter"){
        e.preventDefault();
        verificarPalavra();
    }
})