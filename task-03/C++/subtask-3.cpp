#include <iostream>
#include <string>

using namespace std;

void asteriskDiamond() {
    int n;
    string output;

    cout << "Enter the width of the biggest row: ";
    cin >> n;

    if (n <= 0) {
        cout << "Please enter a natural number\n";
        return;
    }

    if (n % 2 == 0) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                output += ' ';
            }
            for (int k = 0; k < i + 1; k++) {
                output += '*';
                if (k < i) output += ' ';
            }
            output += '\n';
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j <= i; j++) {
                output += ' ';
            }
            for (int k = 0; k < n - i - 1; k++) {
                output += '*';
                if (k < n - i - 2) output += ' ';
            }
            output += '\n';
        }

    } else {
        int t = n / 2;
        for (int i = 0; i <= t; i++) {
            for (int j = 0; j < t - i; j++) {
                output += "   ";
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                output += " * ";
            }
            output += '\n';
        }
        for (int i = 0; i < t; i++) {
            for (int j = 0; j <= i; j++) {
                output += "   ";
            }
            for (int k = 0; k < n - 2 * i - 2; k++) {
                output += " * ";
            }
            output += '\n';
        }
    }

    cout << output;
}

int main() {
    asteriskDiamond();
    return 0;
}
