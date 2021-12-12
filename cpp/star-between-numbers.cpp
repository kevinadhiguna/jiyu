/**
* Question :
* 
* Input  : 10
* Output : 1 * 3 4 * 6 * 8 9 *
* 
* Input  : 20
* Output : 1 * 3 4 * 6 * 8 9 * 11 * 13 14 * 16 * 18 19 *
* 
* Input  : 25
* Output : 1 * 3 4 * 6 * 8 9 * 11 * 13 14 * 16 * 18 19 * 21 * 23 24 *
* 
*/

#include <iostream>
using namespace std;

int main() {
    // Declare input
    int numLength;
    
    // Input the length of number
    cout<<"Length of numbers : ";
    cin>>numLength;
    
    // Print numbers as output
    for (int i = 1; i <= numLength; i++) {
        (i % 5 == 0 || i % 5 == 2) ? cout<<"* " : cout<<i<<" ";
    }

    return 0;
}
