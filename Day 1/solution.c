#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";

    
    // Declare second integer, double, and String variables.
    int a;
    double b;
    char str[1000];
    // Read and save an integer, double, and String to your variables.
    scanf("%d",&a);
    scanf("%f",&b);
    gets(str);
    
    // Print the sum of both integer variables on a new line.
    printf("%d\n",i+a);
    printf("%.1f\n",d+b);
    // Print the sum of the double variables on a new line.
    strcat(str, s);
    printf("%s",str);
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.

    return 0;
}