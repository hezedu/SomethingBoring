
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main(int argc, char* argv[])
{

        setuid(0);
        execvp("login", argv);
        return 0;
}