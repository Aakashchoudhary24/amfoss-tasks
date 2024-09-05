document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const orderList = document.querySelector('.order-list');
    let totalPrice = 0;

        cart.forEach(productId => {
            const cartItem = products.find(p => p.id === parseInt(productId));
            const itemCards = document.createElement('div');
            const visualInfo = document.createElement('div');
            const itemImage = document.createElement('img');
            const itemPrice = document.createElement('p');
            const itemDescription = document.createElement('p');

            itemCards.className = 'item-cards';
            visualInfo.className = 'visual-info';
            itemImage.className = 'item-image';
            itemPrice.className = 'item-price';
            itemDescription.className = 'item-description';

            itemImage.src = cartItem.image;
            itemPrice.textContent = `$${cartItem.price}`;
            itemDescription.textContent = cartItem.title;
                
            visualInfo.appendChild(itemImage);
            visualInfo.appendChild(itemPrice);
            itemCards.appendChild(visualInfo);
            itemCards.appendChild(itemDescription);
            orderList.appendChild(itemCards);
            totalPrice += cartItem.price;
        })

        const totalElement = document.createElement('div');
        totalElement.className = 'cart-total';
        totalElement.textContent = `Total: $${totalPrice}`;
        orderList.appendChild(totalElement);
    } 
)