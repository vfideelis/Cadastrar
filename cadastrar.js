var area=document.getElementById('area')
let botao = document.getElementById("botao");

var nomeCadastro = "Vinicius"
function entrar(){
    var nome = prompt("Digite seu nome")

    if(nome === '' || nome === null){
        alert("Ops, algo deu errado!!!")
        area.innerHTML = "Clique no botão para acessar..."
    }else{ 
        if(nomeCadastro==nome){
            area.innerHTML = "Bem Vindo " + nome + "<br><br>"
            let botaoSair = document.createElement("button")
            botaoSair.innerHTML = "Sair da conta"
            botaoSair.onclick = sair
            area.appendChild(botaoSair)
            botao.setAttribute("hidden","true");
        }else{
            alert("Nome não cadastrado por favor realizar cadastro...")
        }
    }
   
}
function sair(){
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
    botao.removeAttribute("hidden");
}

var exibeMensagem = function(){
    if(true) {
        var escopoFuncao = 'Escopo Função';
        let escopoBloco = "Escopo Bloco";

        console.log(escopoBloco);
    }
    console.log(escopoFuncao);
    console.log(escoloBloco);
}