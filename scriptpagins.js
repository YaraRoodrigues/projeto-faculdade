var formu = document.querySelector("#form")
var nome = document.querySelector("#name")
var eemail = document.querySelector("#email")
var cel = document.querySelector("#cel")
var cursos = document.querySelector("#cursos")
var caixas = document.querySelector(".caix")

var botao = document.querySelector(".enviar")


formu.addEventListener("submit", (event) => {
    event.preventDefault()
    

    // verifique se os campos estão vazios
    if (nome.value === ""){
        alert("Preencha seu nome!")
        return
    } 

    if (eemail.value === ""  || !isEmailValid(eemail.value) ){
        alert("Preencha o seu e-mail!!")
        return
    } 

    if(cel.value ===""){
        alert("Preencha seu celular")
        return
    }



    //se todos os campos estão corretos
    formu.submit()

})


//função validação email @

function isEmailValid(email){

    //regex para validar forma do email
    const emailRegex= new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
     return true

    } else{
        return false
    } 
}



