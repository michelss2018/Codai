var nome = "Michel Souza"
var nomeHTML = document.getElementById("nome")

var cargo = "Web Developer"
var cargoHTML = document.getElementById("cargo")

var sobre = document.getElementById("textoSobre")
var projetos = document.getElementById("textoProjetos")

function colocaNomeCargo(){
    nomeHTML.innerHTML = nome
    cargoHTML.innerHTML = cargo
}

colocaNomeCargo()

/**************************/

function onProjetos(){    
    sobre.style.display = "none"
    projetos.style.display = "block"
}

function onSobre(){    
    sobre.style.display = "block"
    projetos.style.display = "none"
}


