const terminalOutput = document.getElementById('terminal-out');
const terminalInput = document.querySelector('input[type="text"]');
const terminal = document.querySelector('.terminal');
const terminalWindow = document.getElementById('terminal-window');

// rendering product data
let product = null;
fetch('https://fakestoreapi.com/products/')
.then(response => response.json())
.then(data => {
    product= data;
    console.log(product);
    renderImages();
})
// // rendering the product images in showroom
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
    const [cmd, ...arg] = command.split(' ');

    switch (cmd) {
        case 'help':
            helpCommand();
            break;
        case 'clear':
            clear();
            break;
        case 'list':
            listCommand(terminalOutput);
            break;
        case 'details':
            if (arg) {
                detailsCommand(terminalOutput, arg);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.\n";
            }
            break;
        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }
    terminalInput.value = '';
}
// help command
function helpCommand(){
    terminalOutput.innerHTML= 
    `<p>1) list
2) clear
3) details id
4) cart
5) buy
6) sort "price/name"
7) add "product_id"
8) remove "product_id"
9) search "product_name"`
}
// clear command
function clear(){
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
function listCommand(terminalOutput) {
    product.forEach(p => {
        terminalOutput.innerHTML += `${p.id} : ${p.title}<br>`;
    });
}
// view product details command
function detailsCommand(terminalOutput, productId){
    terminalOutput.innerHTML = '';
    const productDetail = product.find(p => p.id === parseInt(productId));
    terminalOutput.innerHTML += 
                `<p>Title : ${productDetail.title}</p>
                <p>Price : $${productDetail.price}</p>
                <p>Description : ${productDetail.description}</p>
                <p>Category : ${productDetail.category}</p>`;
}