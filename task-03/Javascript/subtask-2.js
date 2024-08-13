const fs = require('fs');

function fileReadAndWrite() {
    const inputPath = "/home/aakash/amfoss-tasks/task-03/Javascript/input.txt";
    const outputPath = "/home/aakash/amfoss-tasks/task-03/Javascript/output.txt";

    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        fs.writeFile(outputPath, data, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

fileReadAndWrite();
