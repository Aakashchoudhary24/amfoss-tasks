const readline = require('readline');

function asteriskDiamond() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the width of the biggest row: ", function(input) {
        const n = parseInt(input);

        if (isNaN(n) || n <= 0) {
            console.log("Please enter a natural number");
            rl.close();
            return;
        }

        if (n % 2 === 0) {
            for (var i = 0; i < n; i++) {
                var line = "";
                for (var j = 0; j < n - i - 1; j++) {
                    line += " ";
                }
                for (var k = 0; k < i + 1; k++) {
                    line += " *";
                }
                console.log(line);
            }

            for (var i = 0; i < n - 1; i++) {
                var line = "";
                for (var j = 0; j <= i; j++) {
                    line += " ";
                }
                for (var k = 0; k < n - i - 1; k++) {
                    line += " *";
                }
                console.log(line);
            }

        } else {
            var t = Math.floor(n / 2);
            for (var i = 0; i <= t; i++) {
                var line = "";
                for (var j = 0; j < t - i; j++) {
                    line += "   ";
                }
                for (var k = 0; k < 2 * i + 1; k++) {
                    line += " * ";
                }
                console.log(line);
            }
            for (var i = 0; i < t; i++) {
                var line = "";
                for (var j = 0; j <= i; j++) {
                    line += "   ";
                }
                for (var k = 0; k < n - 2 * i - 2; k++) {
                    line += " * ";
                }
                console.log(line);
            }
        }

        rl.close();
    });
}

asteriskDiamond();
