#include <stdio.h>
#include <stdlib.h>

void fileReadAndWrite() {
    FILE *fileReader = NULL;
    FILE *fileWriter = NULL;
    char *inputPath = "/home/aakash/amfoss-tasks/task-03/C/input.txt";
    char *outputPath = "/home/aakash/amfoss-tasks/task-03/C/output.txt";
    
    fileReader = fopen(inputPath, "r");
    if (fileReader == NULL) {
        perror("Error opening input file");
        return;
    }

    fileWriter = fopen(outputPath, "w");
    if (fileWriter == NULL) {
        perror("Error opening output file");
        fclose(fileReader);
        return;
    }

    int character;
    while ((character = fgetc(fileReader)) != EOF) {
        fputc(character, fileWriter);
    }

    fclose(fileReader);
    fclose(fileWriter);
}

int main() {
    fileReadAndWrite();
    return 0;
}
