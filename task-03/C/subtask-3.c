#include <stdio.h>

void asteriskDiamond() {
    int n;

    printf("Enter the width of the biggest row: ");
    scanf("%d", &n);

    if (n <= 0) {
        printf("Please enter a natural number\n");
        return;
    }

    if (n % 2 == 0) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                printf(" ");
            }
            for (int k = 0; k < i + 1; k++) {
                printf(" *");
            }
            printf("\n");
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j <= i; j++) {
                printf(" ");
            }
            for (int k = 0; k < n - i - 1; k++) {
                printf(" *");
            }
            printf("\n");
        }

    } else {
        int t = n / 2;
        for (int i = 0; i <= t; i++) {
            for (int j = 0; j < t - i; j++) {
                printf("   ");
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                printf(" * ");
            }
            printf("\n");
        }
        for (int i = 0; i < t; i++) {
            for (int j = 0; j <= i; j++) {
                printf("   ");
            }
            for (int k = 0; k < n - 2 * i - 2; k++) {
                printf(" * ");
            }
            printf("\n");
        }
    }
}

int main() {
    asteriskDiamond();
    return 0;
}
