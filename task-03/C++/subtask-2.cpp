#include <iostream>
#include <fstream>
using namespace std;

int main(){
    
    string line;
    
    ifstream input_file("/home/aakash/amfoss-tasks/task-03/C++/input.txt");

    if(!input_file){
        cout << "Error locating/opening the input file" << endl;
    }

    ofstream output_file("/home/aakash/amfoss-tasks/task-03/C++/output.txt");

    if(input_file && output_file){

        while (getline(input_file, line)){
            
            output_file << line << "\n";
        }
        cout << "Copy finished \n";
    }

    else {
        cout << "Error executing copy" << endl;
    }

    input_file.close();

    output_file.close();

    return 0;
}
