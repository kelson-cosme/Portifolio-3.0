const pesquisa = document.getElementById("barraPesquisa");
const overlay = document.getElementById("overlay")

function pesquisar(){
    pesquisa.classList.toggle("pesquisaAparecer")
    overlay.style.display = "block"


    if(barra.className == "aparecer aparecerBarra"){
        barra.classList.toggle("aparecerBarra");

    }
}

overlay.addEventListener("click", function(){
    pesquisa.classList.toggle("pesquisaAparecer")
    overlay.style.display = "none"

});



//Links das páginas dos projetos
//----------------------------------------------------------

const lista = document.getElementById("lista");

function trafic(event){
    trocarLinks[event.target.text]()
}

const trocarLinks = {
    'Blog': () => event.target.href = "https://blog-desafio1.netlify.app" ,
    'Conversor de tempertura': () => event.target.href = "https://conversor-temperatura-cf.netlify.app",
    'Feliz Natal': () => event.target.href = "https://feliz-natal-desafio16.netlify.app",
    'Kenai': () => event.target.href = "https://kenai-desafio17.netlify.app",
    'Loja Virtual': () => event.target.href = "https://jordanshoes-desafio2.netlify.app",
    'Loki': () => event.target.href = "https://loki-desafio06.netlify.app",
    'OnePage': () => event.target.href = "https://onepage-desafio3.netlify.app",
    'Rachi': () => event.target.href = "https://rachi-desafio19.netlify.app",
    'StudioGhibli': () => event.target.href = "https://studioghibli-desafio05.netlify.app",
    'Tela de Login': () => event.target.href = "https://login-desafio4.netlify.app"
}

lista.addEventListener("click", trafic)


//Lista nomes dos projetos
//-----------------------------------------------------------

const lupa = document.getElementById("lupa");

const nomes = [
    {nome: "Blog"},
    {nome: "Conversor de tempertura"},
    {nome: "Feliz Natal"},
    {nome: "Kenai"},
    {nome: "Loja Virtual"},
    {nome: "Loki"},
    {nome: "OnePage"},
    {nome: "Rachi"},
    {nome: "StudioGhibli"},
    {nome: "Tela de Login"},
];

function handleFilter(){
    lista.innerHTML = ""
    const filtrado = nomes.filter( itens => itens.nome.toLowerCase().includes(lupa.value.toLowerCase()));

    filtrado.forEach(nomes => {
        
        console.log(nomes.nome)
        

        lista.innerHTML += 
         `
        ${
            "<a href=# >" +
                nomes.nome + 
            "</a>"
        }
        `
    })
}