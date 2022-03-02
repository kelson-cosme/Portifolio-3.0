const barra = document.getElementById("barraIniciar")

function barraInicial(){
    barra.classList.toggle("aparecerBarra");
    
    if(pesquisa.className == "pesquisa2 pesquisaAparecer"){
        pesquisa.classList.toggle("pesquisaAparecer")
    }
}


let horaAtual = document.querySelector("#hora");
let dataAtual = document.getElementById("data");
let horaAtual2 = document.getElementById("hora2")

const repetir = setInterval(novaHora,50900);
function novaHora() {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();


    if (minuto < 10){
        minuto = "0" + minuto;
    } else if (dia < 10){
        dia = "0" + dia;
    } else if (mes < 10){
        mes = "0" + (1 + mes);
    } 

    console.log(horaAtual)
    horaAtual.innerHTML = hora + ":" + minuto;
    horaAtual2.innerHTML = hora + ":" + minuto;
    dataAtual.innerHTML = dia + "/" + mes + "/" + ano;
}

novaHora()