const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/css/templates/header.css';
    document.head.appendChild(link);
    

const header = () => {
    return `
        <header class="header">
            <img src="src/images/logo.png" alt="MegaStok" class="logo">
            <nav class="navIcons">
                <a href="/favoritos.html"><img class="icon" alt="Favoritos" src="src/images/favorito.png"></a>
                <a href="/carrinho.html"><img class="icon" alt="Carrinho" src="src/images/carrinho.png"></a>
                <a href="/perfilUsuario.html"><img class="userImage" alt="Perfil" src="src/images/user.png"></a>
            </nav>
        </header>
    `;
};

    // document.body.innerHTML += header; 
export default header;