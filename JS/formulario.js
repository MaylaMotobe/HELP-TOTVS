document.querySelector("#botaoEnviar").addEventListener("click", validarFormulario)
function validarFormulario() {
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const text = document.getElementById("validationTextarea")
    
    if (
        document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" && 
        document.getElementById("validationTextarea").value != ""
    ) {
        // const nome = document.getElementById("nome")
        // const email = document.getElementById("email")
        // const text = document.getElementById("validationTextara")
        alert("Obrigado! Você receberá um e-mail de retorno.")
        
        return;
    } else {

        alert("Por favor, preencha os campos!")

        return;
    }
};