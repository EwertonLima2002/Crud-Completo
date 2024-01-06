function validarNome(){
    let nome = document.getElementById('nome').value;

    if(nome == ""){
      nome.style.border = "1px solid red";
        document.getElementById('nome').focus();
        return false;
     }

     else{
        nome.style.border = "1px solid green";
     }
}

function validarEmail(){

    let email = document.getElementById('email').value;

    if(email == ""){
        document.getElementById('email').focus();
        return false;
    }
    else if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert('Email invalido');
        document.getElementById('email').focus();
        return false;
    }
    else{
        return true;
    }
}

function validarSenha(){
    let senha = document.getElementById('senha').value;

    if(senha == ""){
        document.getElementById('senha').focus();
        return false;
    }
    else{
        return true;
    }
}

function cadastrar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if(nome == ""){
        document.getElementById('nome').focus();
        return false;
    }

    if(email == ""){
        document.getElementById('email').focus();
        return false;
    }

    if(senha == ""){
        document.getElementById('senha').focus();
        return false;
    }

    let data = {
        nome: nome,
        email: email,
        senha: senha
    }

    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        if(data.error){
            alert(data.message)
        }else{
            alert(data.message)
            window.location.reload()
        }
    })
}