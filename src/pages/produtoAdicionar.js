function loadAdicionarProduto() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = `
        <form id="addProductForm" method="post" enctype="multipart/form-data">
            <label for="titleInput">Título</label>
            <input id="titleInput" type="text" name="titulo" required>
            
            <label for="priceInput">Preço</label>
            <input id="priceInput" type="number" name="preco" required>

            <label for="descriptionInput">Descrição</label>
            <input id="descriptionInput" type="text" name="descricao" required>

            <label for="categoryInput">Categoria</label>
            <input id="categoryInput" type="text" name="categoria" required>

            <label for="imageInput">Imagem</label>
            <input id="imageInput" type="file" name="imagem" required>

            <button type="submit" id="btnAdicionar">Adicionar</button>
        </form>
    `;

    document.getElementById("addProductForm").addEventListener("submit", function(event) {
        event.preventDefault();

        console.log("Produto adicionado:", {
            title: document.getElementById("titleInput").value,
            price: document.getElementById("priceInput").value,
            description: document.getElementById("descriptionInput").value,
            category: document.getElementById("categoryInput").value,
            image: document.getElementById("imageInput").files[0]
        });

    });
}

loadAdicionarProduto();