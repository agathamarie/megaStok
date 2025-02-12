document.getElementById("btnAdicionar").addEventListener("click", function()
{
    const title = document.getElementById("titleInput").value;
    const price = document.getElementById("priceInput").value;
    const description = document.getElementById("descriptionInput").value;
    const image = document.getElementById("imageInput").value;
    const category = document.getElementById("categoryInput").value;

    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: `${title}`,
                price: `${price}`,
                description: `${description}`,
                image: `${image}`,
                category: `${category}`
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
        .catch(error => console.error('Error', error));







})