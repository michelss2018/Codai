var nome = "Michel Souza"
var nomeHTML = document.getElementById("nome")

var cargo = "Dev Full Stack"
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

/****************************/

function trocaImgSobre(){
    var img = document.getElementById("img-michel")
    img.innerHTML = '<img src="/img/michel.gif" alt="Foto de Perfil" class="card-image mx-auto d-block">'
}

function trocaImgProjetos(){
    var img = document.getElementById("img-michel")
    img.innerHTML = '<img src="/img/michel1.gif" alt="Foto de Perfil" class="card-image mx-auto d-block">'
}

/****************************/
function openADS(){
    window.open("curriculoADS.html")
}

function openADM(){
    window.open("curriculoADM.html")
}
