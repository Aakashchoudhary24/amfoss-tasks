const terminalOutput = document.getElementById('terminal-out');
const terminalInput = document.querySelector('input[type="text"]');
const terminal = document.querySelector('.terminal');
const terminalWindow = document.getElementById('terminal-window');
const cart = [];
// rendering product data
let product = null;
fetch('https://fakestoreapi.com/products/')
.then(response => response.json())
.then(data => {
    product= data;
    console.log(product);
    renderImages();
})
// rendering the product images in showroom
function renderImages(){
    product.forEach(product => {
        const showroom = document.querySelector('.showroom');

        const newProduct = document.createElement('img');
        newProduct.src = product.image;

        const productCard = document.createElement('div')
        productCard.className = 'product-card';

        productCard.appendChild(newProduct);
        showroom.appendChild(productCard);
    })
}
// enter key press functionality
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        handleInput(command, terminalOutput);
        insertTerminalWindow();
    }
});
// function for inserting new terminal after every enter key press
function insertTerminalWindow() {
    const newInputLine = document.createElement('div');
    newInputLine.className = 'terminal-input';

    const newCounter = document.createElement('span');
    newCounter.id = 'counter';
    newCounter.innerHTML = '<strong>butter@counter:$</strong>';

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
// handling the input commands
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
                searchCommand(terminalOutput, arg);
            }
            else {
                terminalOutput.textContent += "Please provide a product ID.\n"
            }
            break;

        case 'sort':
            if (arg) {
                sortCommand(terminalOutput, arg);
            }
            else {
                terminalOutput.textContent += "Please provide a product ID.\n"
            }
            break;

        case 'buy':
            buyCommand();
            break;

        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }
    terminalInput.value = '';
}
// help command
function helpCommand(terminalOutput){
    terminalOutput.innerHTML = 
    `1) list <br>2) clear<br>3) details "product_id"<br>4) cart<br>5) buy<br>6) sort "price/name"<br>7) add product_id<br>8) remove "product_id"<br>9) search "product_id"`
}
// clear command
function clearTerminal(){
    terminal.innerHTML = '';

    const newTerminalWindow = document.createElement('div');
    newTerminalWindow.className = 'terminal-window';
        
    const newInputLine = document.createElement('div');
    newInputLine.className = 'terminal-input';
        
    const newCounter = document.createElement('span');
    newCounter.id = 'counter';
    newCounter.innerHTML = '<strong>butter@counter:$</strong>';
        
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
// list command 
function listProducts(terminalOutput) {
    product.forEach(p => {
        terminalOutput.innerHTML += `${p.id} : ${p.title}<br>`;
    });
}
// view product details command
function viewProductDetails(terminalOutput, productId){
    terminalOutput.innerHTML = '';
    const productDetail = product.find(p => p.id === parseInt(productId));
    terminalOutput.innerHTML += 
                `<p>Title : ${productDetail.title}</p>
                <p>Price : $${productDetail.price}</p>
                <p>Description : ${productDetail.description}</p>
                <p>Category : ${productDetail.category}</p>`;
}
// add to cart
function addToCart(terminalOutput, productId){

    if(productId > 20){
        terminalOutput.textContent += "Please provide a valid ID\n"
    }
    else if (cart.includes(productId)){
        terminalOutput.textContent += "Item already in cart"
    }
    else{
        cart.push(productId);
        terminalOutput.innerHTML += 
        `Product ${productId} successfully added to cart . Type 'cart' to view cart details`;
    }
}
// remove from cart
function removeFromCart(terminalOutput, productId){
    const indexOfProduct = cart.indexOf(productId);

    if (productId > 20){
        terminalOutput.textContent += "No product with provided ID\n"
    }
    else{
        cart.splice(indexOfProduct, 1);
        terminalOutput.textContent += `Product ${productId} removed successfully`;
    }
}
// view current cart status
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
        Type buy to proceed to checkout`
    }
}
// sort on basis of price 
function sortProducts(terminalOutput, minAmount, maxAmount, name){

}