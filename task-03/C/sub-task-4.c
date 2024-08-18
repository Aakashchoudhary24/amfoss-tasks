#include <stdio.h>
#include <stdlib.h>

void showDiamond();
void asteriskDiamond(int n, FILE *output);

int main() {
    return 0;
}

void showDiamond() {
    FILE *input = fopen("/home/aakash/amfoss-tasks/task-03/C/Input.txt", "r");
    if (input == NULL) {
        perror("Error opening input file");
        return;
    }
    FILE *output = fopen("/home/aakash/amfoss-tasks/task-03/C/Output.txt", "w");
    if (output == NULL) {
        perror("Error opening output file");
        fclose(input);
        return;
    }

    int n;
    fscanf(input, "%d", &n);

    asteriskDiamond(n, output);

    fclose(input);
    fclose(output);
}

void asteriskDiamond(int n, FILE *output) {   
    if (n <= 0) {
        fprintf(output, "Invalid input : Please enter a natural number\n");
        printf("Invalid input : Please enter a natural number\n");
        return;
    }
    
    if (n % 2 == 0) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                fprintf(output, " ");
            }
            for (int k = 0; k < i + 1; k++) {
                fprintf(output, " *");
            }
            fprintf(output, "\n");
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j <= i; j++) {
                fprintf(output, " ");
            }
            for (int k = 0; k < n - i - 1; k++) {
                fprintf(output, " *");
            }
            fprintf(output, "\n");
        }

    } else {
        int t = n / 2;
        for (int i = 0; i <= t; i++) {
            for (int j = 0; j < t - i; j++) {
                fprintf(output, "   ");
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                fprintf(output, " * ");
            }
            fprintf(output, "\n");
        }
        for (int i = 0; i < t; i++) {
            for (int j = 0; j <= i; j++) {
                fprintf(output, "   ");
            }
            for (int k = 0; k < n - 2 * i - 2; k++) {
                fprintf(output, " * ");
            }
            fprintf(output, "\n");
        }
    }
}