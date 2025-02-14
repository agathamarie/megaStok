const formLogin = () => {

    return `
        <div id="contentLogin">
            <h1>Login</h1>
            <form name="formLogin" id="formLogin">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="  Digite seu username...">

                <label for="senha">Senha</label>
                <input type="text" name="senha" id="senha" placeholder="  Digite sua senha...">

                <button type="submit">ENTRAR</button>
                <div id="cadastrar">
                    <p>Não tem login?</p><a href="/cadastro.html">Cadastre-se</a>
                </div>
            </form>
        </div>
    `;
};

export default formLogin;