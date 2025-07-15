#include<stdio.h>
int main() {
    int num[] = {20,40,60,80};
   int max = num[0];
   for(int i=0 ; i<=max ; i++)
   if(max > num[i])
   max = num[i];
   printfx(max);

}