const fs = require('fs');

function asteriskDiamond(n) {
    let line = '';

    if (n <= 0) {
        console.log("Please enter a natural number");
        return line;
    }

    if (n % 2 === 0) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                line += ' ';
            }
            for (let k = 0; k < i + 1; k++) {
                line += ' * ';
            }
            line += '\n';
        }

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j <= i; j++) {
                line += ' ';
            }
            for (let k = 0; k < n - i - 1; k++) {
                line += ' * ';
            }
            line += '\n';
        }

    } else {
        let t = Math.floor(n / 2);
        for (let i = 0; i <= t; i++) {
            for (let j = 0; j < t - i; j++) {
                line += '   ';
            }
            for (let k = 0; k < 2 * i + 1; k++) {
                line += ' * ';
            }
            line += '\n';
        }
        for (let i = 0; i < t; i++) {
            for (let j = 0; j <= i; j++) {
                line += '   ';
            }
            for (let k = 0; k < n - 2 * i - 2; k++) {
                line += ' * ';
            }
            line += '\n';
        }
    }

    return line;
}

function showDiamond() {
    const inputPath = '/home/aakash/amfoss-tasks/task-03/Javascript/input.txt';
    const outputPath = '/home/aakash/amfoss-tasks/task-03/Javascript/output.txt';

    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const n = parseInt(data.trim());
        const diamond = asteriskDiamond(n);

        fs.writeFile(outputPath, diamond, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

showDiamond();
