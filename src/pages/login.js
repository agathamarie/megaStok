
import formLogin from "../templates/formLogin.js";
async function pesquisarUsuario(){ // função para pesquisar os usuarios
    const usuarios = await fetch('https://fakestoreapi.com/users') // aqui fetch faz uma requisição na API para buscar todos os users e seus dados
    .then(res=>res.json()) // pegamos a resposta e transformamos em um objeto

    return usuarios // retornamos os usuarios :)
}

async function validarUsuario(usuario){ // função que valida e pega o id do usuario
    const usuarios = await pesquisarUsuario() // armazenamos no 'usuarios' o retorno da função pesquisarUsuarios(No caso, retornará todos os usuarios existentes)
    const [usuarioAutenticado] = usuarios.filter(user => user.username === usuario) // filtramos os usuarios para achar somente o que tem o mesmo nome do 'username'
    //  os '[]' do usuarioAutenticado servem para pegar somente o primeiro item do filter, já que o mesmo retorna um array, podendo ter mais de um usuario com o mesmo username

    
    return usuarioAutenticado.id // e agora, a função retorna o devido id do usuario
}

async function sessionUsuario(token, usuario){ // sessionUsuario cria a sessão do usuario
    sessionStorage.clear(); // limpa todos os itens armazenados no sessionStorage
    const setToken = sessionStorage.setItem('userToken', token.token) // sessionStorage.setItem armazena o token do usuário no sessionStorage
    const setUser = sessionStorage.setItem('UserId', await validarUsuario(usuario)) // e aqui armazena o ID do usuário no sessionStorage, mas antes de armazenar chama a função validarUsuario para pegar o ID e validar
    if(setToken && setUser){ // se tudo estiver correto, prontinho :)
        return true;
    }
}

async function fetchLogin(usuario, senha){ // função do fetchLogin
    try{
        const token = await fetch('https://fakestoreapi.com/auth/login',{ // faz uma requisição fetch assíncrona para a URl:
            method:'POST', // usando o método HTTP post
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ // o corpo da requisição é um objeto JSON que contem o username e a senha
                username: usuario,
                password: senha
            })
        })
        // a resposta da requisição é convertida para JSON e o valor retornado pela requisição vai ser armazenado no 'token'
    
        .then(res=>res.json()) // esse é chamado logo após o fetch retornar uma resposta (res), que é um objeto de resposta HTTP. res.json() transforma a resposta do servidor em um objeto JavaScript
    
        await sessionUsuario(token, usuario); // chamamos a função sessionUsuario para criar uma sessão para o usuario
        window.location.href = 'index.html'; // se der tudo certo, o usuario será redirecionado para a home
    }
    catch (error){
        if(error == 401){
            alert("Usuário não encontrado!")
        }
        alert("Usuário ou senha incorretos!")
    }
}


function enviarLogin(event){ //no enviar login eu passo o parametro event, que no caso será o submit
    event.preventDefault(); // aqui eu tiro os acontecimentos padrões do submit

    const usuario  = event.target.username.value; // pego do form apó submit o username
    const senha = event.target.senha.value ;      // e a senha

    if (usuario  && senha) { // se o usuario tiver preenchido o username e a senha:
        fetchLogin(usuario , senha); // chamo a função fetchlogin e passo os parametros username e name, ela é chamada para enviar uma requisição POST para a API
    } 
    else { // se o usuario não tiver preenchido, vai dar um alert na tela avisando disso
        alert("Preencha todos os campos.");
    }
}

document.getElementById('sectionLogin').innerHTML = formLogin();

document.getElementById('formLogin').addEventListener('submit', enviarLogin) // Peguei meu form pelo ID e adicionei o evento de quando acontecer o submit a função enviar login ser chamada