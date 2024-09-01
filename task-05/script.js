const terminalOutput = document.getElementById('terminal-out');
const terminalInput = document.querySelector('input[type="text"]');
const terminal = document.querySelector('.terminal');

function handleInput(command, outputElement) {
    switch (command) {
        case 'help':
            outputElement.innerHTML += "Available Commands:\nlist\ndetails 'product_id'\nadd 'product_id'\nremove 'product_id'\nclear\ncart\nbuy\nsearch 'product_name'\nsort 'price/name'\n";
            break;
        case 'clear':
            terminalOutput.innerHTML = '';
            break;
        default:
            outputElement.textContent += `Invalid command: ${command}\n`;
            break;
    }
    terminalInput.value = '';
}

function insertTerminalWindow() {
    const newOutputLine = document.createElement('p');
    newOutputLine.className = 'terminal-output';

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

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        handleInput(command, terminalOutput);
        insertTerminalWindow();
    }
});

function help() {
    terminalOutput.innerHTML += 
"Available Commands:\nlist\ndetails 'product_id'\nadd 'product_id'\nremove 'product_id'\nclear\ncart\nbuy\nsearch 'product_name'\nsort 'price/name'\n";
}

function clear(){
    terminalOutput.innerHTML = '';
    document.getElementById("terminal").outerHTML=" ";
}
