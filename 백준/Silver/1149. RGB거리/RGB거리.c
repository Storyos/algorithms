#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int mina(int a, int b) { return (a > b ? b : a); }
int main()
{
	int r[1001] = { 0, };
	int g[1001] = { 0, };
	int b[1001] = { 0, };
	int n;

	int fr[1001] = { 0, };
	int fg[1001] = { 0, };
	int fb[1001] = { 0, };
	scanf("%d", &n);

	for (int i = 1; i <= n; i++) {
		scanf("%d %d %d", &r[i], &g[i], &b[i]);
	}

	fr[1] = r[1];
	fg[1] = g[1];
	fb[1] = b[1];

	for (int i = 2; i <= n; i++)
	{
		fr[i] = mina(fg[i - 1], fb[i - 1]) + r[i];
		fg[i] = mina(fr[i - 1], fb[i - 1]) + g[i];
		fb[i] = mina(fg[i - 1], fr[i - 1]) + b[i];
	}
	
	printf("%d", mina(mina(fr[n], fg[n]), fb[n]));

	return 0;
}
