const cpfElement = document.querySelector("#cpf");;
const gerarCPFBtn = document.querySelector("#generateCPF");
const copyCPFBtn = document.querySelector("#copyCPF");

function gerarCPF() {
    let n = Math.floor(Math.random() * 999999999) +1;
    let nStr = n.toString().padStart(9, "0");
    let div1 = calcularDV(nStr, 10);
    let div2 = calcularDV(nStr + div1, 11)

    cpfElement.innerText = formatarCPF(nStr + div1 + div2)
}

function calcularDV(numero, peso){
    let total = 0;
    for (let i=0;i<numero.length;i++){
        total += parseInt(numero.charAt(i)) * peso--;
    }
    let resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function formatarCPF(cpf) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(regex, "$1.$2.$3-$4");
}

gerarCPFBtn.addEventListener("click", gerarCPF)



function copiarCPF(){
    const cpf = cpfElement.innerText
    navigator.clipboard.writeText(cpf).then(()=>{
        alert(`CPF ${cpf} copiado com sucesso`)
    },
    (err) => {
        console.log("Erro ao copiar o CPF");
    });
}

copyCPFBtn.addEventListener("click", copiarCPF)