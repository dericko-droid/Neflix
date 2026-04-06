function cadastrar(){
    var nome1 = document.getElementById("inputNome1").value
    var sobrenome1 = document.getElementById("inputSobrenome1").value
    if( nome1 == "" ||
    sobrenome1 == "" ){
       Swal.fire({
            title: "Acesso Negado!",
            theme: 'dark',
            text: "Algum dos dados não foi informados ",
            icon: "error"
        });
    }else if(nome1 == "Derick" &&
        sobrenome1 == "Nagayama"
    ){
       Swal.fire({
            title: "Acesso Concedido!",
            theme: 'dark',
            text: "Dados enviados com sucesso",
            icon: "success"
        });
        

    }else{
        Swal.fire({
            title: "Acesso Negado!",
            theme: 'dark',
            text: "Nome ou Sobrenome estão errados",
            icon: "error"
        });
    }
}
