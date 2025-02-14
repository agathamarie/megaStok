function loadEditarProduto() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = `
        <h2>Editar Produto</h2>
        <form id="editProductForm" method="post" enctype="multipart/form-data">
            <label for="editTitleInput">Título</label>
            <input id="editTitleInput" type="text" name="titulo" required>
            
            <label for="editPriceInput">Preço</label>
            <input id="editPriceInput" type="number" name="preco" required>

            <label for="editDescriptionInput">Descrição</label>
            <input id="editDescriptionInput" type="text" name="descricao" required>

            <label for="editCategoryInput">Categoria</label>
            <input id="editCategoryInput" type="text" name="categoria" required>

            <label for="editImageInput">Imagem</label>
            <input id="editImageInput" type="file" name="imagem" required>

            <button type ="submit" id="btnEditar">Editar</button>
        </form>
    `;


    document.getElementById("editProductForm").addEventListener("submit", function(event) {
        event.preventDefault();

        console.log("Produto editado:", {
            title: document.getElementById("editTitleInput").value,
            price: document.getElementById("editPriceInput").value,
            description: document.getElementById("editDescriptionInput").value,
            category: document.getElementById("editCategoryInput").value,
            image: document.getElementById("editImageInput").files[0]
        });
    });
}

function toggleForm(isEdit) {
    if (isEdit) {
        loadEditarProduto();
    } else {
        loadAdicionarProduto();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.createElement('button');
    btnToggle.textContent = 'Alternar para Editar Produto';
    document.body.appendChild(btnToggle);

    let isEdit = false;
    btnToggle.addEventListener('click', () => {
        isEdit = !isEdit;
        toggleForm(isEdit);
        btnToggle.textContent = isEdit ? 'Alternar para Adicionar Produto' : 'Alternar para Editar Produto';
    });
});