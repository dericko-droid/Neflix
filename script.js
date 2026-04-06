function logar(){
    var nome = document.getElementById("inputNome").value
    var sobrenome = document.getElementById("inputSobrenome").value
    var data = document.getElementById("inputData").value
    var rg = document.getElementById("inputRg").value
    var rua = document.getElementById("inputRua").value
    var bairro = document.getElementById("inputBairro").value
    var numero = document.getElementById("inputNumero").value
    var cidade = document.getElementById("inputCidade").value
    var cep = document.getElementById("inputCep").value
    var estado = document.getElementById("inputEstado").value

    if( nome == "" ||
    sobrenome == "" ||
    data == "" ||
    rg == "" ||
    rua == "" ||
    bairro == "" ||
    numero == "" ||
    cidade == "" ||
    cep == "" ||
    estado == ""){
       Swal.fire({
            title: "Acesso Negado!",
            theme: 'dark',
            text: "Algum dos dados não foi informados ",
            icon: "error"
        });
    }else{
       Swal.fire({
            title: "Acesso Concedido!",
            theme: 'dark',
            text: "Dados enviados com sucesso",
            icon: "success"
        });
        
   
    }
}
