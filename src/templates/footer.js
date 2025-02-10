document.addEventListener('DOMContentLoaded', () => {    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/css/templates/footer.css';
    document.head.appendChild(link);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer">
            <img src="src/images/logofooter.png" alt="logo" class="logofooter">
            <nav>
                <ul>
                    <li><a href="/sobre">Sobre o Projeto</a></li>
                    <li><p> | </p></li>
                    <li><a href="Participantes.html">Participantes</a></li>
                </ul>
                <p class="fakeTermos">Termo de uso      Política de Privadidade</p>
                <p class="fakeProperty">® megaStok</p>
            </nav>
        </div>
    `;

    document.body.appendChild(footer);
});
