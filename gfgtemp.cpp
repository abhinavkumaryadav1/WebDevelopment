#include<iostream>
using namespace std;
int i=1;
void nums(int n)
{

cout<<i<<" ";
i=i+1;
if (i>n)
{
    return;
}
else
nums(n);

}
int main() 

{

int num =5;
nums(num);

return 0;
}