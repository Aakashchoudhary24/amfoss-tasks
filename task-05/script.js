const terminalOutput = document.getElementById('terminal-out');
const terminalInput = document.querySelector('input[type="text"]');
const terminal = document.querySelector('.terminal');
const terminalWindow = document.getElementById('terminal-window');
const cart = [];
const totalCartValue = document.createElement('div');

let product = null;
fetch('https://fakestoreapi.com/products/')
.then(response => response.json())
.then(data => {
    product= data;
    console.log(product);
    renderImages();
})

function renderImages(){
    product.forEach(product => {
        const showroom = document.querySelector('.showroom');

        const newProduct = document.createElement('img');
        newProduct.src = product.image;

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productGist = document.createElement('div');
        productGist.className = 'product-gist';

        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'cart-button';
        addToCartButton.textContent = ' + '

        addToCartButton.addEventListener('click', () => {
            const productId = product.id;
            const productToAdd = product; 

            if (cart.includes(productId)) {
                alert("Item already in the cart");
            } else {
                cart.push(productId);
                alert(`${productToAdd.title} has been successfully added to the cart.`);
            }

            console.log('Cart:', cart);
        });

        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(newProduct);
        productGist.appendChild(productPrice);
        productGist.appendChild(addToCartButton);
        productCard.appendChild(productGist)
        showroom.appendChild(productCard);
    })
}

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        handleInput(command, terminalOutput);
        insertTerminalWindow();
    }
});

function insertTerminalWindow() {
    const newInputLine = document.createElement('div');
    newInputLine.className = 'terminal-input';

    const newCounter = document.createElement('span');
    newCounter.id = 'counter';
    newCounter.innerHTML = '<strong>your@counter:$</strong>';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = "Type 'help'";

    const newOutputLine = document.createElement('p');
    newOutputLine.className = 'terminal-output';

    newInputLine.appendChild(newCounter);
    newInputLine.appendChild(newInput);

    terminal.appendChild(newInputLine);
    terminal.appendChild(newOutputLine);

    newInput.focus();

    newInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = newInput.value.trim();
            handleInput(command, newOutputLine);
            insertTerminalWindow();
        }
    });
}

function handleInput(command, terminalOutput) {
    const [cmd, arg] = command.split(' ');

    switch (cmd) {

        case 'help':
            helpCommand(terminalOutput);
            break;

        case 'clear':
            clearTerminal();
            break;

        case 'list':
            listProducts(terminalOutput);
            break;

        case 'details':
            if (arg) {
                viewProductDetails(terminalOutput, arg);
            } else {
                terminalOutput.textContent += "Please provide a product ID.\n";
            }
            break;

        case 'cart':
            viewCartContent(terminalOutput);
            break;

        case 'add':
            if (arg) {
                addToCart(terminalOutput, arg);
            }
            else {
                terminalOutput.textContent += "Please provide a product ID.\n"
            }
            break;

        case 'remove':
            if (arg) {
                removeFromCart(terminalOutput, arg);
            }
            else {
                terminalOutput.textContent += "Please provide a product ID.\n"
            }
            break;

        case 'search':
            if (arg) {
                searchName(terminalOutput, arg);
            }
            else {
                terminalOutput.textContent += "Please provide a product ID.\n"
            }
            break;

        case 'sort':
            if (arg === 'name' || arg === 'price') {
                sortAndDisplayProducts(arg);
                terminalOutput.textContent += `Products sorted in order by ${arg}.\n`;
            } else {
                terminalOutput.textContent += "Please specify 'name' or 'price' for sorting.\n";
            }
            break;

        case 'buy':
            proceedToBuy();
            break;

        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }
    terminalInput.value = '';
}

function helpCommand(terminalOutput){
    terminalOutput.innerHTML = 
    `<strong>Available Commands :</strong><br>1) list <br>2) clear<br>3) details "product_id"<br>4) cart<br>5) buy<br>6) sort "price/name"<br>7) add "product_id"<br>8) remove "product_id"<br>9) search "product_id"`
}

function clearTerminal(){
    terminal.innerHTML = '';

    const newTerminalWindow = document.createElement('div');
    newTerminalWindow.className = 'terminal-window';
        
    const newInputLine = document.createElement('div');
    newInputLine.className = 'terminal-input';
        
    const newCounter = document.createElement('span');
    newCounter.id = 'counter';
    newCounter.innerHTML = '<strong>your@counter:$</strong>';
        
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = "Type 'help'";
        
    newInputLine.appendChild(newCounter);
    newInputLine.appendChild(newInput);
        
    const newOutputLine = document.createElement('p');
    newOutputLine.className = 'terminal-output';

    newTerminalWindow.appendChild(newInputLine);
    newTerminalWindow.appendChild(newOutputLine);

    terminal.appendChild(newTerminalWindow);

    newInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = newInput.value.trim();
            handleInput(command, newOutputLine);
            insertTerminalWindow();
        }
    });
    newInput.focus();

    terminalWindow.innerHTML = '';
}

function listProducts(terminalOutput) {
    product.forEach(p => {
        terminalOutput.innerHTML += `${p.id} : ${p.title}<br>`;
    });
}

function viewProductDetails(terminalOutput, productId){
    terminalOutput.innerHTML = '';
    const productDetail = product.find(p => p.id === parseInt(productId));
    terminalOutput.innerHTML += 
                `<p><strong>Product Details :</strong></p><br>
                <p>Name : ${productDetail.title}</p>
                <p>Price : $${productDetail.price}</p>
                <p>Description : ${productDetail.description}</p>
                <p>Category : ${productDetail.category}</p>`;
}

function addToCart(terminalOutput, productId){
    const productToAdd = product.find(p => p.id === parseInt(productId));
    if(productId > 20){
        terminalOutput.textContent += "Please provide a valid ID\n"
    }
    else if (cart.includes(productId)){
        terminalOutput.textContent += "Item already in cart"
    }
    else{
        cart.push(productId);
        terminalOutput.innerHTML += 
        `${productToAdd.title}..... successfully added to cart.<br> Type 'cart' to view cart details`;
    }
}

function removeFromCart(terminalOutput, productId){
    const productToRemove = product.find(p => p.id === parseInt(productId));
    const indexOfProduct = cart.indexOf(productId);

    if (!productToRemove){
        terminalOutput.textContent += "No product with provided ID\n"
    }
    else if (indexOfProduct === -1){
        terminalOutput.textContent += "Product not in cart ... yet :("
    }
    else{
        cart.splice(indexOfProduct, 1);
        terminalOutput.textContent += `${productToRemove.title}.... successfully removed from the cart`;   
    }
}

function viewCartContent(terminalOutput) {
    var netPrice = 0;
    if(cart.length == 0){
        terminalOutput.textContent = "No items in the cart yet :("
    }
    else if (cart.length > 0){
        for(i = 0; i < cart.length; i++){
            const individualProduct = product.find(p => p.id === parseInt(cart[i]));
            netPrice += individualProduct.price;
            terminalOutput.innerHTML += `<strong>Product :${individualProduct.id}</strong><br>
            Title : ${individualProduct.title}<br>
            Price : ${individualProduct.price}<br>
            ---------------------------------------<br>\n`
        }
        terminalOutput.innerHTML += `Total payable amount : $ ${netPrice}<br>
        Type 'buy' to proceed to checkout`
    }
}

function sortAndDisplayProducts(sortBy) {
    const showroom = document.querySelector('.showroom');
    showroom.innerHTML = '';
    let sortedProducts = [...product];
    if (sortBy === 'name') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    sortedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const newProduct = document.createElement('img');
        newProduct.src = product.image;

        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price}`;

        const productGist = document.createElement('div');
        productGist.className = 'product-gist';
        
        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'cart-button';

        productCard.appendChild(newProduct);
        productGist.appendChild(productPrice);
        productGist.appendChild(addToCartButton);
        productCard.appendChild(productGist)
        showroom.appendChild(productCard);
    });
}
function proceedToBuy() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(product));
    window.location.href = 'buy.html';
}

function searchName(terminalOutput, arg){
    let searchByFirstName = str => product.filter(({title}) => title.toLowerCase().includes(str.toLowerCase()));
    const filteredProducts = searchByFirstName(arg); 
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(p => {
            terminalOutput.innerHTML += `${p.id} : ${p.title}<br>`;
        });
    } else {
        terminalOutput.textContent = "No product with such name found";
    }
}