function updateQuantity(increment, button) {
   
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    const unitPrice = 22.03; 
    const priceElement = button.closest('.product-item').querySelector('.product-price p');
    if (increment) {
        quantity++;
    } else if (quantity > 0) {
        quantity--;
    }
    quantityElement.textContent = quantity;
    const totalPrice = (unitPrice * quantity).toFixed(2); 
    priceElement.textContent = `R$ ${totalPrice}`;
}

function deleteProduct(button) {
    
    const productItem = button.closest('.product-item');

    
    productItem.remove();
}

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const isIncrement = event.target.textContent === '+';
        updateQuantity(isIncrement, button);
    });
});


document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        deleteProduct(button);
    });
});