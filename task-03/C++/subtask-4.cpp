#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void asteriskDiamond(int n, ofstream &output) {   
    if (n <= 0) {
        output << "Please enter a natural number\n";
        return;
    }
    
    if (n % 2 == 0) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                output << " ";
            }
            for (int k = 0; k < i + 1; k++) {
                output << " *";
            }
            output << "\n";
        }

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j <= i; j++) {
                output << " ";
            }
            for (int k = 0; k < n - i - 1; k++) {
                output << " *";
            }
            output << "\n";
        }

    } else {
        int t = n / 2;
        for (int i = 0; i <= t; i++) {
            for (int j = 0; j < t - i; j++) {
                output << "   ";
            }
            for (int k = 0; k < 2 * i + 1; k++) {
                output << " * ";
            }
            output << "\n";
        }
        for (int i = 0; i < t; i++) {
            for (int j = 0; j <= i; j++) {
                output << "   ";
            }
            for (int k = 0; k < n - 2 * i - 2; k++) {
                output << " * ";
            }
            output << "\n";
        }
    }
}

void showDiamond() {
    ifstream input("/home/aakash/amfoss-tasks/task-03/C++/input.txt");
    if (!input.is_open()) {
        cerr << "Error opening input file" << endl;
        return;
    }
    
    ofstream output("/home/aakash/amfoss-tasks/task-03/C++/output.txt");
    if (!output.is_open()) {
        cerr << "Error opening output file" << endl;
        input.close();
        return;
    }

    int n;
    input >> n;

    asteriskDiamond(n, output);

    input.close();
    output.close();
}

int main() {
    showDiamond();
    return 0;
}
