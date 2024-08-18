#include <stdio.h>

int main(){
    int data;
    FILE *fileReader = NULL;
    FILE *fileWriter = NULL;    

    fileReader = fopen("/home/aakash/amfoss-tasks/task-03/C/Input.txt", "r");
    if (fileReader == NULL){
        perror("Error opening the input file");
        return 1;
    }

    fileWriter = fopen("/home/aakash/amfoss-tasks/task-03/C/Output.txt", "w");
    if (fileWriter == NULL){
        perror("Error opening the output file");
        return 1;
    }
    while ((data = fgetc(fileReader)) != EOF){
        fputc(data, fileWriter);
    }
    fclose(fileReader);
    fclose(fileWriter);

    return 0;
}