
import mostrarUsuario from "./usuarioform.js";

const userId = sessionStorage.getItem("userId");


fetch(`https://fakestoreapi.com/users/${userId}`)
    .then(res=>res.json())
    .then(json=> {
        console.log(json)
        document.getElementById("usuario").innerHTML += mostrarUsuario(json);
    })

document.addEventListener("submit", (event) => {
    event.preventDefault()
    if(!event.target == infoUser){
        return;
    }

    const jsonAtualizado = {
        username: infoUser.username.value,
        name:{
            firstname: infoUser.primeiroNome.value,
            lastname: infoUser.sobrenome.value
        },
        email: infoUser.email.value,
        password: infoUser.password.value,
        address:{
            city: infoUser.cidade.value,
            street: infoUser.rua.value,
            number: infoUser.numeroCasa.value,
            zipcode: infoUser.cep.value
        },
        phone: infoUser.telefone.value
    }

    fetch(`https://fakestoreapi.com/users/${userId}`, {
        method:"PATCH",
        body:JSON.stringify(jsonAtualizado)
    })

        .then(res=>res.json())
        .then(json=>console.log(jsonAtualizado))
    
}) 
