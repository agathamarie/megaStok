document.addEventListener('DOMContentLoaded', () => {  
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/css/templates/footer.css';
    document.head.appendChild(link);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <fotter class="footer">
            <img src="src/images/logo.png" alt="MegaStok" class="logo">
            <nav>
                <ul>
                    <li><a href="/sobre">Sobre o Projeto</a></li>
                    <li><p> | </p></li>
                    <li><a href="participantes.html">Participantes</a></li>
                </ul>
                <p class="fakeTermos">Termo de uso      Política de Privadidade</p>
                <p class="fakeProperty">® megaStok</p>
            </nav>
        </fotter> `
    ;

    document.body.appendChild(footer);
});
