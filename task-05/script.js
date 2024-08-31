fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json))


const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');


function handleInput(command) {


    switch (action) {

        case 'help':
            viewCommand();
            break;

        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

function viewCommand() {
    terminalOutput.innerHTML += "Available Commands:"

}



