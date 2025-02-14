const mostrarUsuario = ({ email, name, username, address, phone }) => {
    return `
        <form id="infoUser">
            <label>Username:</label>
            <input type="text" name="username" id="username" value="${username}">
            
            <label>Nome:</label>
            <input type="text" name="primeiroNome" id="primeiroNome" value="${name.firstname}" disabled>
            
            <label>Sobrenome:</label>
            <input type="text" name="sobrenome" id="sobrenome" value="${name.lastname}" disabled>
            
            <label>Email:</label>
            <input type="email" name="email" id="email" value="${email}" disabled>
            
            <label>Senha:</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha">
            
            <label>Cidade:</label>
            <input type="text" name="cidade" id="cidade" value="${address.city}">
            
            <label>Rua:</label>
            <input type="text" name="rua" id="rua" value="${address.street}">
            
            <label>Número:</label>
            <input type="number" name="numeroCasa" id="numeroCasa" value="${address.number}">
            
            <label>Telefone:</label>
            <input type="tel" name="telefone" id="telefone" value="${phone}">
            
            <label>CEP:</label>
            <input type="text" name="cep" id="cep" value="${address.zipcode}">
            
            <input type="submit" value="Atualizar">
        </form>
    `;
};

export default mostrarUsuario;
