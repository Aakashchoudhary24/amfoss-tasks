#include <iostream>

using namespace std;

int main(){

    int n;

    string output;

    cout << "Enter a natural number\n";

    cin >> n;

    if(n <= 0){
        cout << "Please enter a natural number\n"; 
    }
    if(n % 2 == 0) {

        for(int i = 0; i < n; i++ ){

            for(int j; j < n - i - 1; j++){
                output += ' ';
            }
            for(int k; k < i + 1; k++){
                output += ' * ';
            }
            output += '\n';
        }
        for(int i = 0; i < n - 1; i++ ){

            for(int j; j < i + 1; j++){
                output += ' ';
            }
            for(int k; k < n - i - 1; k++){
                output += ' * ';
            }
            output += '\n';
        }
    }
    else{
        int t = n/2;

        for(int i = 0; i < t + 1; i++ ){

            for(int j; j < t - i; j++){
                output += '   ';
            }
            for(int k; k < 2*i + 1; k++){
                output += ' * ';
            }
            output += '\n';
        }
        for(int i = 0; i < t; i++ ){
            
            for(int j; j < i + 1; j++){
                output += ' ';
            }
            for(int k; k < n - 2*i - 2; k++){
                output += ' * ';
            }
            output += '\n';
        }
    }

    cout << output;
}