#include <iostream>
#include <iomanip>
#include <limits>

using namespace std;

int main() {
    int i = 4;
    double d = 4.0;
    string s = "HackerRank ";

    
    // Declare second integer, double, and String variables.
    int a;
    double b;
    string c;
    // Read and save an integer, double, and String to your variables.
    cin >> a;
    cin >> b;
    getline(cin >> ws, c);
    // Note: If you have trouble reading the entire string, please go back and review the Tutorial closely.
    
    // Print the sum of both integer variables on a new line.
    cout << a + i << endl;
    // Print the sum of the double variables on a new line.
    printf("%.1f\n", b+d);
    // Concatenate and print the String variables on a new line
    s = s + c;
    cout << s;
    // The 's' variable above should be printed first.

    return 0;
}