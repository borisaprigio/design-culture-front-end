
var cadastroNome;
var cadastroUsuario;
var confirmacao;

cadastroNome = window.prompt("Qual seu nome: ");
cadastroUsuario = window.prompt("Qual seu usuário: ");
confirmacao = window.confirm("Deseja compatilhar seus dados? ");

if( confirmacao == true) {
    if( cadastroUsuario == "Boris"){
        alert("Você precisa pagar sua assinatura");
    }else{
        alert("Seja bem vindo " + cadastroUsuario);
    }

}else{
    alert("O usuário não quis compatilhar os");
}




