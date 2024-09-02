const terminalOutput = document.getElementById('terminal-out');
const terminalInput = document.querySelector('input[type="text"]');
const terminal = document.querySelector('.terminal');
const terminalWindow = document.getElementById('terminal-window');

function handleInput(command, outputElement) {
    switch (command) {
        case 'help':
            outputElement.innerHTML += "Available Commands:list,details 'product_id',add 'product_id',remove 'product_id',clear,cart,buy,search 'product_name',sort 'price/name'";
            break;
        case 'clear':
            clear();
            break;
        default:
            outputElement.textContent += `Invalid command: ${command}\n`;
            break;
    }
    terminalInput.value = '';
}

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

terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        handleInput(command, terminalOutput);
        insertTerminalWindow();
    }
});
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
