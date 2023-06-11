const form = document.querySelector("form")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#message")
const errorMessages = document.querySelector(".error-message")


form.addEventListener("submit",(event) => {
    event.preventDefault();
    validateInput();
});


 function setError(input, errorMessages){
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessages;
    input.parentElement.classList.add("error") //atenção!!!
 }

function validateInput(){
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === ""){
        setError(nome, "Nome é obrigatório");
    }
    if(emailValue === ""){
        setError(email, "E-mail é obrigatório");
    }else if(!isValidEmail(emailValue)) {
        setError(email, "E-mail inválido");
    } 
    if(assuntoValue === ""){
        setError(assunto, "O assunto é obrigatório");
    }
    if(mensagemValue === ""){
        setError(mensagem, "A mensagem é obrigatória");
    }

}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}