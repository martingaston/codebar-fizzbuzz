#include <stdio.h>

int main(void)
{
    for (int i = 0; i <= 100; i++)
    {
        if (i % 3 == 0)
        {
            printf("Fizz");
        }
        if (i % 5 == 0)
        {
            printf("Buzz");
        }
        if (i % 3 != 0 && i % 5 != 0)
        {
            printf("%i", i);
        }
        printf("\n");
    }
}